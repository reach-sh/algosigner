import { Ledger, Backend, API } from './messaging/types';

export class Settings {
    static backend: Backend = Backend.PureStake;
    static backend_settings: {[key: string]: any} = {
        [Backend.PureStake]: {
            [Ledger.TestNet]: {
                [API.Algod] : {
                    url: "https://algosigner.api.purestake.io/testnet/algod",
                    port: ""
                },
                [API.Indexer] : {
                    url: "https://algosigner.api.purestake.io/testnet/indexer",
                    port: ""
                }
            },
            [Ledger.MainNet]: {
                [API.Algod] : {
                    url: "https://algosigner.api.purestake.io/mainnet/algod",
                    port: ""
                },
                [API.Indexer] : {
                    url: "https://algosigner.api.purestake.io/mainnet/indexer",
                    port: ""
                },
            },
            [Ledger.Localhost] : {
                [API.Algod] : {
                    url: "http://localhost",
                    port: "4180",
                    apiKey: "c87f5580d7a866317b4bfe9e8b8d1dda955636ccebfa88c12b414db208dd9705"
                },
                [API.Indexer] : {
                    url: "http://localhost",
                    port: "8980",
                    apiKey: "reach-devnet"
                }
            },
            apiKey: {}
        }
    }

    public static getBackendParams(ledger: Ledger, api: API) {
        return {
            url: this.backend_settings[this.backend][ledger][api].url,
            port: this.backend_settings[this.backend][ledger][api].port,
            apiKey: ledger === Ledger.Localhost
              ? this.backend_settings[this.backend][ledger][api].apiKey
              : this.backend_settings[this.backend].apiKey
        }
    }
};