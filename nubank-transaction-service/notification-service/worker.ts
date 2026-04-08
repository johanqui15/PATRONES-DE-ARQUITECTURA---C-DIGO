class NotificationService {
    listen() {
        console.log("[Notification-MS] Escuchando eventos en Kafka...");
        
        // Simulación de reacción al evento [cite: 490, 634]
        const mockEventReceived = { userId: "user_123", amount: 50000 };
        
        this.sendNotification(mockEventReceived);
    }

    sendNotification(data: any) {
        console.log(`[Push/SMS] ¡Nubank te informa! Has enviado $${data.amount} con éxito. ✅`);
    }
}

new NotificationService().listen();