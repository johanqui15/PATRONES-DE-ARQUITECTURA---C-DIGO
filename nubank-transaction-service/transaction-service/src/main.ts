import { ProcessTransaction } from "./application/ProcessTransaction.js";
import { PostgresAdapter } from "./infrastructure/adapters/PostgresAdapter.js";
import { KafkaAdapter } from "./infrastructure/adapters/KafkaAdapter.js";

async function runPrototipo() {
    console.log("---------------------------------------------------");
    console.log("🚀 NUBANK - SISTEMA DE ALTA DISPONIBILIDAD");
    console.log("---------------------------------------------------");

    // 1. Instanciamos los Adaptadores (Infraestructura)
    const dbRepo = new PostgresAdapter();
    const kafkaBus = new KafkaAdapter();

    // 2. Inyectamos dependencias en el Caso de Uso (Core/Dominio)
    const useCase = new ProcessTransaction(dbRepo, kafkaBus);

    // 3. Ejecutamos el flujo real del código
    console.log("⚙️  Ejecutando Caso de Uso...");
    const resultado = await useCase.execute({ userId: "johan_01", amount: 150000 });
    
    console.log("---------------------------------------------------");
    console.log("✅ RESULTADO ENVIADO AL CLIENTE:", resultado);
    console.log("---------------------------------------------------");

    // 4. Simulamos el Microservicio de Notificaciones escuchando (Pub-Sub)
    console.log("\n[Sistema] Esperando reacción del segundo microservicio...");
    await new Promise(res => setTimeout(res, 1000));
    
    console.log("[Notification-MS] 📩 Evento recibido desde Kafka");
    console.log(`[Push/SMS] ¡Nubank te informa! Has enviado $150000 con éxito. ✅`);
}

runPrototipo();