import type { TransactionRepository } from "../../domain/ports/TransactionRepository.js";

export class PostgresAdapter implements TransactionRepository {
    async save(transaction: any): Promise<void> {
        console.log(`[Infrastructure] Guardando en PostgreSQL: TX-${transaction.id}`);
    }
}
