'use client'
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappComponent = () => {
    return(
        <FloatingWhatsApp 
        phoneNumber='+5511940681638' 
        accountName='HUB|C'
        statusMessage="Normalmente responde em até 1 hora"
        chatMessage="Olá! Somos a HUB|C, em que podemos te ajudar?"
        placeholder="Envie uma mensagem..."
        avatar="/LOGO-2.png"
         />
    )
}

export default WhatsappComponent;