export interface TransactionRepository {
    save(transaction: any): Promise<void>;
}