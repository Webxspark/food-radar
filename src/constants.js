const CONTRACT_ADDRESS = "0x66e2d6e91D83a67450EBE57b4597A788bEa01643";

const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet_address",
                "type": "address"
            }
        ],
        "name": "createUser",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wallet_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_data",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_token",
                "type": "string"
            }
        ],
        "name": "newReport",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet_address",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "new_status",
                "type": "bool"
            }
        ],
        "name": "updateAdmin",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "data",
                "type": "string"
            }
        ],
        "name": "updateUser",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "accounts",
        "outputs": [
            {
                "internalType": "address",
                "name": "wallet_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "data",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "isAdmin",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "fetchReport",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fetchReports",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "wallet_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "data",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "token",
                        "type": "string"
                    }
                ],
                "internalType": "struct ReportPlatform.Report[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet_address",
                "type": "address"
            }
        ],
        "name": "fetchUser",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "wallet_address",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "data",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "isAdmin",
                        "type": "bool"
                    }
                ],
                "internalType": "struct ReportPlatform.Account",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "wallet_address",
                "type": "address"
            }
        ],
        "name": "isUserExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "reports",
        "outputs": [
            {
                "internalType": "address",
                "name": "wallet_address",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "data",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "token",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

export { CONTRACT_ADDRESS, CONTRACT_ABI };