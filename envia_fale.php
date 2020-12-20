# alterar a variavel abaixo colocando o seu email

$destinatario = "projetorefusa@gmail.com";

$nome = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$assunto = $_REQUEST['assunto'];
$mensagem = $_REQUEST['mensagem'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome " . $nome . "\n";
$body = $body . "Email " . $email . "\n";
$body = $body . "Assunto " . $assunto . "\n";
$body = $body . "Mensagem " . $mensagem . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $assunto , $body, "From: $email\r\n");

// redireciona para a página de obrigado
header("location:obrigado.htm");


?>