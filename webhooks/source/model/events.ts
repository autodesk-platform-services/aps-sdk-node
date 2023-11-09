/* tslint:disable */
/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Events = {
    ExtractionFinished: 'extraction.finished',
    ExtractionUpdated: 'extraction.updated',
    ModelSync: 'model.sync',
    ModelPublish: 'model.publish',
    DmVersionAdded: 'dm.version.added',
    DmVersionModified: 'dm.version.modified',
    DmVersionDeleted: 'dm.version.deleted',
    DmVersionMoved: 'dm.version.moved',
    DmVersionMovedOut: 'dm.version.moved.out',
    DmVersionCopied: 'dm.version.copied',
    DmVersionCopiedOut: 'dm.version.copied.out',
    DmLineageReserved: 'dm.lineage.reserved',
    DmLineageUnreserved: 'dm.lineage.unreserved',
    DmLineageUpdated: 'dm.lineage.updated',
    DmFolderAdded: 'dm.folder.added',
    DmFolderModified: 'dm.folder.modified',
    DmFolderDeleted: 'dm.folder.deleted',
    DmFolderPurged: 'dm.folder.purged',
    DmFolderMoved: 'dm.folder.moved',
    DmFolderMovedOut: 'dm.folder.moved.out',
    DmFolderCopied: 'dm.folder.copied',
    DmFolderCopiedOut: 'dm.folder.copied.out',
    DmOperationStarted: 'dm.operation.started',
    DmOperationCompleted: 'dm.operation.completed',
    ItemClone: 'item.clone',
    ItemCreate: 'item.create',
    ItemLock: 'item.lock',
    ItemRelease: 'item.release',
    ItemUnlock: 'item.unlock',
    ItemUpdate: 'item.update',
    WorkflowTransition: 'workflow.transition',
    BudgetCreated10: 'budget.created-1.0',
    BudgetUpdated10: 'budget.updated-1.0',
    BudgetDeleted10: 'budget.deleted-1.0',
    BudgetPaymentCreated10: 'budgetPayment.created-1.0',
    BudgetPaymentUpdated10: 'budgetPayment.updated-1.0',
    BudgetPaymentDeleted10: 'budgetPayment.deleted-1.0',
    ContractCreated10: 'contract.created-1.0',
    ContractUpdated10: 'contract.updated-1.0',
    ContractDeleted10: 'contract.deleted-1.0',
    CorCreated10: 'cor.created-1.0',
    CorUpdated10: 'cor.updated-1.0',
    CorDeleted10: 'cor.deleted-1.0',
    CostPaymentCreated10: 'costPayment.created-1.0',
    CostPaymentUpdated10: 'costPayment.updated-1.0',
    CostPaymentDeleted10: 'costPayment.deleted-1.0',
    ExpenseCreated10: 'expense.created-1.0',
    ExpenseUpdated10: 'expense.updated-1.0',
    ExpenseDeleted10: 'expense.deleted-1.0',
    ExpenseItemCreated10: 'expenseItem.created-1.0',
    ExpenseItemUpdated10: 'expenseItem.updated-1.0',
    ExpenseItemDeleted10: 'expenseItem.deleted-1.0',
    MainContractCreated10: 'mainContract.created-1.0',
    MainContractUpdated10: 'mainContract.updated-1.0',
    MainContractDeleted10: 'mainContract.deleted-1.0',
    MainContractItemCreated10: 'mainContractItem.created-1.0',
    MainContractItemUpdated10: 'mainContractItem.updated-1.0',
    MainContractItemDeleted10: 'mainContractItem.deleted-1.0',
    OcoCreated10: 'oco.created-1.0',
    OcoUpdated10: 'oco.updated-1.0',
    OcoDeleted10: 'oco.deleted-1.0',
    PcoCreated10: 'pco.created-1.0',
    PcoUpdated10: 'pco.updated-1.0',
    PcoDeleted10: 'pco.deleted-1.0',
    ProjectInitialized10: 'project.initialized-1.0',
    RfqCreated10: 'rfq.created-1.0',
    RfqUpdated10: 'rfq.updated-1.0',
    RfqDeleted10: 'rfq.deleted-1.0',
    ScheduleOfValueCreated10: 'scheduleOfValue.created-1.0',
    ScheduleOfValueUpdated10: 'scheduleOfValue.updated-1.0',
    ScheduleOfValueDeleted10: 'scheduleOfValue.deleted-1.0',
    ScoCreated10: 'sco.created-1.0',
    ScoUpdated10: 'sco.updated-1.0',
    ScoDeleted10: 'sco.deleted-1.0'
} as const;

export type Events = typeof Events[keyof typeof Events];



