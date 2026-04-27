# Prompt para Claude Code (VS Code)

Copia y pega este prompt completo al abrir Claude Code en la carpeta del proyecto.

---

## PROMPT INICIAL

```
Hola Claude. Te voy a dar contexto completo sobre este proyecto y necesito que lo dejes 100% funcional y publicado en Render.com.

## Qué es este proyecto

Es una propuesta comercial digital de Intermark Consumer Market para Farmacias Los Hidalgos. Es una landing page de propuesta que incluye:
- Portada corporativa con los logos de ambas empresas
- Índice navegable con 8 secciones
- Contexto y oportunidad de mercado (WhatsApp Commerce)
- Propuesta de solución detallada
- Flujos de interacción del cliente con WhatsApp
- Roadmap por fases (MVP → evolución completa)
- Stack tecnológico recomendado
- Diagrama de integraciones (ERP, Zendesk, pagos, Azure)
- Tabla de inversión por fases
- Estimación de ROI

## Stack del proyecto

- Backend: Node.js + Express (server.js en la raíz)
- Frontend: HTML/CSS estático (en /public/index.html)
- Assets: Logos PNG en /public/assets/
- Deploy objetivo: Render.com (Free tier)

## Estructura de archivos ya creados

```
flh-propuesta/
├── server.js              ← servidor Express que sirve /public como estáticos
├── package.json           ← dependencias (solo express en producción)
├── render.yaml            ← configuración automática de deploy en Render
├── .gitignore             ← excluye node_modules y .env
└── public/
    ├── index.html         ← la propuesta completa (HTML + CSS autocontenido)
    └── assets/
        ├── intermark_logo.png   ← logo de Intermark Consumer Market
        └── hidalgos_logo.png    ← logo de Farmacias Los Hidalgos
```

## Lo que necesito que hagas

1. Lee todos los archivos del proyecto para entender la estructura completa antes de hacer nada.

2. Verifica que todo es coherente:
   - Que server.js sirve correctamente el directorio /public
   - Que el endpoint /health responde { "status": "ok" }
   - Que las rutas de los logos en index.html apuntan a /assets/intermark_logo.png y /assets/hidalgos_logo.png
   - Que package.json tiene los scripts "start" y "dev" correctos

3. Ejecuta npm install para instalar las dependencias.

4. Arranca el servidor en local con npm run dev (o npm start si no hay nodemon).

5. Verifica que funciona correctamente en local:
   - Abre http://localhost:3000 → debe cargar la propuesta con los logos correctos
   - Comprueba http://localhost:3000/health → debe responder {"status":"ok"}
   - Verifica que los logos se cargan en la portada y en cada sección del documento

6. Si hay cualquier problema (logos que no cargan, rutas rotas, puerto ocupado, etc.), corrígelo.

7. Una vez verificado en local, guíame paso a paso para publicar en Render.com:

   a. Inicializar el repositorio Git:
      ```
      git init
      git add .
      git commit -m "feat: propuesta WhatsApp Commerce FLH - initial deploy"
      ```

   b. Crear el repositorio en GitHub y subir el código:
      ```
      gh repo create flh-propuesta-whatsapp --private --push --source=.
      ```
      (Si no tienen gh CLI, explica cómo hacerlo desde la web de GitHub)

   c. Conectar con Render.com:
      - Ir a https://render.com → New → Web Service
      - Conectar el repositorio de GitHub
      - El archivo render.yaml que ya existe configurará todo automáticamente
      - Build Command: npm install
      - Start Command: npm start
      - No se necesitan variables de entorno

   d. Esperar el deploy (2-3 minutos) y obtener la URL pública del tipo:
      https://flh-propuesta-whatsapp.onrender.com

8. Verifica que la URL pública funciona correctamente comprobando /health.

9. Dame la URL final para compartir con el cliente.

## Notas importantes

- NO modificar el contenido ni el diseño de index.html bajo ningún concepto
- NO hay variables de entorno necesarias para este proyecto (es solo estático)
- El plan gratuito de Render funciona perfectamente para esto
- El servidor puede tardar ~30 segundos en arrancar en Render Free tier la primera vez (cold start); es normal

Empieza leyendo todos los archivos del proyecto antes de ejecutar nada.
```

---

## Cómo usarlo en VS Code

1. Descarga o descomprime la carpeta del proyecto `flh-propuesta/`

2. Abre VS Code en esa carpeta:
   ```bash
   cd flh-propuesta
   code .
   ```

3. Abre Claude Code:
   - Atajo: `Cmd+Shift+P` (Mac) o `Ctrl+Shift+P` (Windows/Linux)
   - Escribe "Claude" y selecciona "Claude: Open Chat"
   - O haz clic en el icono de Claude en la barra lateral izquierda

4. Asegúrate de que Claude Code tiene acceso al workspace completo

5. Pega el prompt de arriba y envíalo

6. Claude Code leerá todos los archivos, verificará que todo funciona y te guiará paso a paso hasta tener la URL pública

---

## Cuentas que necesitarás tener preparadas

Antes de empezar, asegúrate de tener:

- Cuenta en **GitHub** → https://github.com (gratuita)
- Cuenta en **Render.com** → https://render.com (gratuita, sin tarjeta de crédito)
- Conectar Render con tu cuenta de GitHub (se hace en el primer deploy)

No se necesita ninguna API key ni configuración adicional.

---

## Comandos útiles durante la sesión

```bash
# Instalar dependencias
npm install

# Arrancar en desarrollo (con hot reload si hay nodemon)
npm run dev

# Arrancar en producción
npm start

# Verificar que el servidor responde
curl http://localhost:3000/health

# Ver la propuesta en el navegador
open http://localhost:3000        # Mac
start http://localhost:3000       # Windows
xdg-open http://localhost:3000    # Linux

# Git: primer commit y push
git init
git add .
git commit -m "feat: propuesta WhatsApp Commerce FLH - initial deploy"
gh repo create flh-propuesta-whatsapp --private --push --source=.
```

---

## Estructura final del proyecto

```
flh-propuesta/
├── server.js              ← Express: sirve /public como estáticos + /health
├── package.json           ← scripts start/dev + dependencia express
├── render.yaml            ← deploy automático en Render.com
├── .gitignore             ← node_modules/ y .env excluidos
└── public/
    ├── index.html         ← propuesta completa (HTML + CSS, sin dependencias)
    └── assets/
        ├── intermark_logo.png
        └── hidalgos_logo.png
```
