import  type { TransactionRepository } from "../domain/ports/TransactionRepository.js";
import  type { EventPublisher } from "../domain/ports/EventPublisher.js";

export class ProcessTransaction {
    // Inyección de Dependencias a través del constructor [cite: 495]
    constructor(
        private repository: TransactionRepository,
        private eventBus: EventPublisher
    ) {}

    async execute(data: { userId: string, amount: number }) {
        console.log(`[Domain] Validando transferencia para el usuario: ${data.userId}`);
        
        // Simulación de lógica contable [cite: 564]
        const transaction = { 
            id: "tx-" + Math.random().toString(36).substr(2, 9),
            ...data,
            status: "COMPLETED",
            timestamp: new Date()
        };

        // Persistencia a través del puerto [cite: 591]
        await this.repository.save(transaction);

        // Publicación del evento (Patrón Pub-Sub) [cite: 607, 633]
        await this.eventBus.publish("transaccion_exitosa", transaction);

        return transaction;
    }
}