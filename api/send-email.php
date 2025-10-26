<?php
// Załaduj PHPMailer (musisz zainstalować przez Composer lub ręcznie dodać pliki)
require_once __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Funkcja do ładowania .env
function loadEnv($path) {
    if (!file_exists($path)) {
        return;
    }
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        if (!array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}

loadEnv(__DIR__ . '/../.env');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Metoda niedozwolona']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['message' => 'Nieprawidłowe dane JSON']);
    exit;
}

$firstName = trim($data['firstName'] ?? '');
$lastName = trim($data['lastName'] ?? '');
$companyName = trim($data['companyName'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$consent = $data['consent'] ?? false;

if (!$consent) {
    http_response_code(400);
    echo json_encode(['message' => 'Zgoda wymagana']);
    exit;
}

if (empty($firstName) || empty($lastName) || empty($companyName) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode(['message' => 'Wszystkie pola są wymagane']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Nieprawidłowy adres e-mail']);
    exit;
}

$smtpHost = getenv('SMTP_HOST');
$smtpPort = getenv('SMTP_PORT') ?: 587;
$smtpSecure = getenv('SMTP_SECURE') === 'true' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
$smtpUser = getenv('SMTP_USER');
$smtpPass = getenv('SMTP_PASS');
$contactEmail = getenv('CONTACT_EMAIL') ?: $smtpUser;
$toEmail = getenv('TO_EMAIL');

if (empty($smtpHost) || empty($smtpUser) || empty($smtpPass) || empty($toEmail)) {
    http_response_code(500);
    echo json_encode(['message' => 'Błąd konfiguracji serwera']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Konfiguracja SMTP
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = $smtpPort;
    $mail->CharSet = 'UTF-8';

    // Nadawca i odbiorca
    $mail->setFrom($contactEmail, 'Formularz kontaktowy');
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, "$firstName $lastName");

    // Treść
    $mail->isHTML(false);
    $mail->Subject = "Nowe zapytanie: $firstName $lastName";
    $mail->Body = "Imię: $firstName\nNazwisko: $lastName\nFirma: $companyName\nTelefon: $phone\nEmail: $email";

    $mail->send();
    
    http_response_code(200);
    echo json_encode(['ok' => true, 'message' => 'E-mail wysłany pomyślnie']);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Błąd wysyłki: ' . $mail->ErrorInfo]);
}
?>
