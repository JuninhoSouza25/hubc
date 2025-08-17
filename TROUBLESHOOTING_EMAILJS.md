# 🔧 Solução de Problemas - EmailJS Template ID

## ❌ Erro: "The template ID not found"

### Problema Identificado:
```
EmailJSResponseStatus
status: 400
text: "The template ID not found. To find this ID, visit https://dashboard.emailjs.com/admin/templates"
```

## 🛠️ Soluções:

### 1. Verificar Template ID no Dashboard
1. **Acesse:** https://dashboard.emailjs.com/admin/templates
2. **Faça login** na sua conta EmailJS
3. **Localize seu template** na lista
4. **Copie o ID correto** (format: `template_xxxxxxx`)

### 2. Criar um Novo Template
Se você não tem um template criado ainda:

1. **Clique em "Create New Template"**
2. **Configure o template:**

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

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr>
<p><em>Esta mensagem foi enviada através do formulário de contato do site Hub-C.</em></p>
```

3. **Salve o template**
4. **Copie o Template ID gerado**

### 3. Atualizar .env.local
No arquivo `.env.local`, atualize com o Template ID correto:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_7q9jb4l
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_NOVO_ID_AQUI
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ipCw-Hkw42BCrt6wd
```

### 4. Reiniciar o Servidor
Após alterar as variáveis de ambiente:
```bash
# Pare o servidor (Ctrl+C)
# Reinicie:
npm run dev
```

### 5. Testar Novamente
1. Acesse: http://localhost:3000
2. Role até o formulário de contato
3. Preencha os campos
4. Envie uma mensagem de teste

## 📝 Checklist de Verificação:

- [ ] Template criado no EmailJS Dashboard
- [ ] Template ID copiado corretamente
- [ ] Arquivo .env.local atualizado
- [ ] Servidor reiniciado
- [ ] Cache do navegador limpo (F5 ou Ctrl+F5)

## 💡 Dicas Importantes:

1. **Template ID deve começar com `template_`**
2. **Não usar espaços ou caracteres especiais**
3. **Verificar se a conta EmailJS está ativa**
4. **Certificar-se de que o template está salvo**

## 🆘 Se o Problema Persistir:

1. **Verifique o console do navegador** para mais detalhes
2. **Teste com um template simples** primeiro
3. **Verifique se o Service ID também está correto**
4. **Confirme se a Public Key está válida**

---

**Nota:** As alterações nas variáveis de ambiente só são aplicadas após reiniciar o servidor de desenvolvimento.
