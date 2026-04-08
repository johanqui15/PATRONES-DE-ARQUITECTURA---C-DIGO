import type { EventPublisher } from "../../domain/ports/EventPublisher.js";

export class KafkaAdapter implements EventPublisher {
    async publish(topic: string, message: any): Promise<void> {
        console.log(`[Infrastructure] Evento '${topic}' enviado al bus de Kafka.`);
    }
}