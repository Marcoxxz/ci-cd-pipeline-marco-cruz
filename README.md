# 🚀 CI/CD Pipeline

## 📌 Descripción

Este proyecto es una aplicación web simple desarrollada con **Node.js y Express**, creada para practicar la implementación de un **pipeline completo de CI/CD** usando **GitHub Actions**.

Incluye:

- Aplicación web con múltiples endpoints
- Tests unitarios y de integración
- Pipeline CI avanzado con múltiples entornos
- Deployment automático a un entorno de staging
- Notificaciones

## 💻 Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el backend.
- **Express**: Framework web rápido y minimalista para Node.js.
- **Jest**: Framework de testing para JavaScript.
- **Supertest**: Herramienta para pruebas HTTP sobre aplicaciones Express.
- **GitHub Actions**: Plataforma de integración y entrega continua (CI/CD).
- **GitHub Pages**: Entorno de staging para despliegue estático (opcional).
- **Slack (opcional)**: Para notificaciones automáticas del pipeline.

## 🗂️ Estructura del proyecto

```
proyecto/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── src/
│   └── index.js
├── tests/
│   └── app.test.js
├── docs/
│   └── overview.md
├── README.md
```

## ⚙️ Instrucciones de instalación

1️⃣ **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/ci-cd-pipeline-marco-cruz.git
cd ci-cd-pipeline-marco-cruz
```

2️⃣ **Instalar dependencias**

```bash
npm install
```

3️⃣ **Correr la aplicación localmente**

```bash
npm start
```

4️⃣ **Ejecutar tests**

```bash
npm test
```

## ⚙️ Endpoints

- **`/sum`**: Realiza la suma de dos números (parámetros `a` y `b`).
- **`/hello`**: Devuelve un saludo simple.
- **`/status`**: Devuelve el estado general del servidor.

## 🧪 Tests

### ✅ Tests unitarios

- Verifican endpoints y errores.

### 🔗 Tests de integración

- Simulan flujos completos y la interacción entre endpoints.

## 🟢 Pipeline CI (ci.yml)

- Corre en Node.js 18, 20 y 22.
- Instala dependencias, cachea, prueba y sube artifacts.
- Notifica en Slack (éxito o fallo).

## 🚀 Deployment (deploy.yml)

- Solo en `main`.
- Requiere tests pasados.
- Deploy a GitHub Pages (staging).
- Notificaciones Slack.

## 📄 Documentación extra

Consulta `docs/overview.md` para detalles extendidos y diagramas.

---
