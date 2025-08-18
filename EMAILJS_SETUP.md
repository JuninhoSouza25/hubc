# 📧 Configuração do EmailJS - Hub-C

## ✅ Status da Implementação
- ✅ EmailJS instalado e configurado
- ✅ Componente Contact atualizado
- ✅ Variáveis de ambiente preparadas
- ✅ Build funcionando corretamente
- ⚠️ **Pendente: Configurar credenciais do EmailJS**

## 🚀 Como Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Faça login no dashboard

### 2. Configurar Serviço de Email
1. No dashboard, clique em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"**
4. Conecte sua conta Gmail
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Clique em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com o seguinte conteúdo:

#### Subject:
```
Nova mensagem do site Hub-C - {{from_name}}
```

#### Content:
```html
<h2>Nova mensagem recebida do site Hub-C</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{phone}}</p>
<p><strong>Nome da Empresa:</strong> {{company_name}}</p>
<p><strong>CNPJ:</strong> {{cnpj}}</p>

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr>
<p><em>Esta mensagem foi enviada através do formulário de contato do site Hub-C.</em></p>
```

4. Anote o **Template ID** gerado

### 4. Obter Public Key
1. Acesse **"Account"** → **"General"**
2. Copie a **Public Key**

### 5. Configurar Variáveis de Ambiente
No arquivo `.env.local`, substitua os valores pelas suas configurações:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

### 6. Testar Configuração
1. Reinicie o servidor de desenvolvimento: `npm run dev`
2. Acesse o formulário de contato em: http://localhost:3000
3. Preencha e envie uma mensagem de teste
4. Verifique se o email foi recebido

## 🎯 Funcionalidades Implementadas
- ✅ **Formulário funcional** - Validação de campos obrigatórios
- ✅ **Loading state** - Indicador visual durante envio
- ✅ **Feedback visual** - Mensagens de sucesso e erro
- ✅ **Reset automático** - Formulário limpo após envio bem-sucedido
- ✅ **Error handling** - Tratamento robusto de erros
- ✅ **Responsive design** - Funciona em todos os dispositivos

## 📝 Limites do Plano Gratuito
- ✅ 200 emails por mês
- ✅ 2 templates de email
- ✅ 1 serviço de email
- ✅ Suporte básico

## 🔧 Solução de Problemas

### Email não está sendo enviado:
1. Verifique se as variáveis de ambiente estão corretas
2. Confirme se o Service ID, Template ID e Public Key estão corretos
3. Verifique no console do navegador se há erros
4. Certifique-se de que o Gmail está conectado corretamente

### Emails vão para spam:
1. Configure SPF/DKIM no EmailJS (plano pago)
2. Use um domínio personalizado
3. Teste com diferentes provedores de email

### Erro de CORS:
1. Verifique se o domínio está configurado no EmailJS
2. Para desenvolvimento local, use `http://localhost:3000`

## 📞 Suporte
- Documentação: https://www.emailjs.com/docs/
- FAQ: https://www.emailjs.com/faq/
- Suporte: https://www.emailjs.com/contact/

---

**Nota:** Mantenha suas chaves privadas e nunca as compartilhe em repositórios públicos!
