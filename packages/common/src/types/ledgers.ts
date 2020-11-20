export function getSupportedLedgers(): Array<object>{
    // Need to add access to additional ledger types from import
    return [{"name": "mainnet", "genesisId": 'mainnet-v1.0', "genesisHash": ""}, 
            {"name": "testnet", "genesisId": 'testnet-v1.0', "genesisHash": ""},
            {"name": "localhost", "genesisId": 'devnet-v1', "genesisHash": "5o9fo9Y65tWHXiS+0d73UXOB3D+eM5zI6sJ+CX9kqmc="}];
}
