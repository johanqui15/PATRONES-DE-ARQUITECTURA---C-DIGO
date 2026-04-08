# 🚀 Nubank Transaction Service - Prototipo de Arquitectura

Este proyecto es un prototipo funcional de un microservicio de transacciones basado en el modelo de **Nubank**. Implementa patrones avanzados de arquitectura de software para garantizar escalabilidad, desacoplamiento y alta disponibilidad.

## 🏗️ Patrones de Arquitectura Implementados

1. **Arquitectura Hexagonal (Ports & Adapters):** Separación estricta entre la lógica de negocio (Core) y los detalles técnicos (Base de Datos, Mensajería).
2. **Inyección de Dependencias:** El caso de uso recibe sus dependencias (repositorios y publicadores) a través del constructor, facilitando el testing y el mantenimiento.
3. **Event-Driven Architecture (Pub-Sub):** Comunicación asíncrona mediante eventos para notificar a otros microservicios sobre transacciones exitosas.
4. **Clean Code & Type Safety:** Desarrollado íntegramente con TypeScript utilizando módulos ECMAScript (ESM) modernos.



---

## 🛠️ Requisitos Previos

* **Node.js:** v20.x o superior (Probado exitosamente en v23.5.0)
* **npm:** v10.x o superior

---

## 🚀 Instalación y Ejecución

Siga estos pasos para desplegar el prototipo en su entorno local:

1. **Clonar el repositorio:**
    git clone "https://github.com/johanqui15/PATRONES-DE-ARQUITECTURA---C-DIGO.git"
    cd nubank-transaction-service/
2.**Instalar dependencias**:
    Se utiliza tsx para la ejecución directa de TypeScript en entornos de desarrollo:
    npm install
3.**Ejecutar el Prototipo:
    Ejecute el comando principal para ver el flujo completo (Validación -> Persistencia -> Evento -> Notificación):
    cd transaction-service
    npx tsx src/main.ts
