//global
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": true,
    "showDuration": "9000",
    "hideDuration": "9000",
    "timeOut": "9000",
    "extendedTimeOut": "6666",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

const promisify = (inner) =>
    new Promise((resolve, reject) =>
        inner((err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    );


var Game = {
        snipedAbi: [{
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}],
            "name": "RefundWaitingLine",
            "outputs": [{"name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": false, "inputs": [], "name": "P3DDivstocontract", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "theplayer", "type": "address"}],
            "name": "blocksTillSemiShoot",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalDividendPoints",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "balances",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "blocksBeforeTargetShoot",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "toupdate", "type": "address"}],
            "name": "fetchdivs",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "NextAtLineEnd", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "lastMove",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "unclaimedDividends", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [],
            "name": "_totalSupply",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "nextFormation", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "van", "type": "string"}],
            "name": "changevanity",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "pointMultiplier", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": false,
            "inputs": [],
            "name": "acceptOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "bullets",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "target", "type": "uint256"}],
            "name": "shootTarget",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "harvestabledivs", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "account", "type": "address"}],
            "name": "dividendsOwing",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "Vanity",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "amountofp3d", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}],
            "name": "formation",
            "outputs": [{"name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "NextInLine", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [],
            "name": "ethtotalSupply",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "blocksBeforeSemiRandomShoot",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": false, "inputs": [], "name": "disburse", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {
            "constant": false,
            "inputs": [],
            "name": "shootSemiRandom",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "Refundpot", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "masternode", "type": "address"}, {"name": "referal", "type": "address"}],
            "name": "sendInSoldierReferal",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "newOwner", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "theplayer", "type": "address"}],
            "name": "blocksTillTargetShoot",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": false, "inputs": [], "name": "Payoutnextrefund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "masternode", "type": "address"}],
            "name": "sendInSoldier",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "theplayer", "type": "address"}],
            "name": "playervanity",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_newOwner", "type": "address"}],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "nextonetogetpaid", "outputs": [{"name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "player", "type": "address"}],
            "name": "death",
            "type": "event"
        }, {"anonymous": false, "inputs": [{"indexed": true, "name": "player", "type": "address"}], "name": "semiShot", "type": "event"}, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "player", "type": "address"}],
            "name": "targetShot",
            "type": "event"
        }, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}],
        p3DAbi: [{
            "constant": true,
            "inputs": [{"name": "_customerAddress", "type": "address"}],
            "name": "dividendsOf",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "_ethereumToSpend", "type": "uint256"}],
            "name": "calculateTokensReceived",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "_tokensToSell", "type": "uint256"}],
            "name": "calculateEthereumReceived",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "onlyAmbassadors", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{"name": "", "type": "uint8"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "bytes32"}],
            "name": "administrators",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "constant": true,
            "inputs": [],
            "name": "sellPrice",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "stakingRequirement", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "_includeReferralBonus", "type": "bool"}],
            "name": "myDividends",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "totalEthereumBalance", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "_customerAddress", "type": "address"}],
            "name": "balanceOf",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_amountOfTokens", "type": "uint256"}],
            "name": "setStakingRequirement",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "buyPrice", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "_identifier", "type": "bytes32"}, {"name": "_status", "type": "bool"}],
            "name": "setAdministrator",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "myTokens", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{"name": "", "type": "string"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": false, "inputs": [], "name": "disableInitialStage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "_toAddress", "type": "address"}, {"name": "_amountOfTokens", "type": "uint256"}],
            "name": "transfer",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_symbol", "type": "string"}],
            "name": "setSymbol",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": false, "inputs": [{"name": "_name", "type": "string"}], "name": "setName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "_amountOfTokens", "type": "uint256"}],
            "name": "sell",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "_referredBy", "type": "address"}],
            "name": "buy",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {"constant": false, "inputs": [], "name": "reinvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "customerAddress", "type": "address"}, {"indexed": false, "name": "incomingEthereum", "type": "uint256"}, {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            }, {"indexed": true, "name": "referredBy", "type": "address"}],
            "name": "onTokenPurchase",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "customerAddress", "type": "address"}, {"indexed": false, "name": "tokensBurned", "type": "uint256"}, {
                "indexed": false,
                "name": "ethereumEarned",
                "type": "uint256"
            }],
            "name": "onTokenSell",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "customerAddress", "type": "address"}, {"indexed": false, "name": "ethereumReinvested", "type": "uint256"}, {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            }],
            "name": "onReinvestment",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "customerAddress", "type": "address"}, {"indexed": false, "name": "ethereumWithdrawn", "type": "uint256"}],
            "name": "onWithdraw",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "from", "type": "address"}, {"indexed": true, "name": "to", "type": "address"}, {"indexed": false, "name": "tokens", "type": "uint256"}],
            "name": "Transfer",
            "type": "event"
        }],
        playerbookAbi: [{"constant": false, "inputs": [], "name": "addMeToAllGames", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "_whatFunction", "type": "bytes32"}],
            "name": "deleteAnyProposal",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "pIDxAddr_",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "registrationFee_", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [],
            "name": "getNameFee",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "bytes32"}],
            "name": "plyrNames_",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "gameNames_",
            "outputs": [{"name": "", "type": "bytes32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "bytes32"}],
            "name": "pIDxName_",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_nameString", "type": "string"}, {"name": "_affCode", "type": "address"}, {"name": "_all", "type": "bool"}],
            "name": "registerNameXaddr",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_gameAddress", "type": "address"}, {"name": "_gameNameStr", "type": "string"}],
            "name": "addGame",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "pID_", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": true,
            "inputs": [{"name": "_pID", "type": "uint256"}],
            "name": "getPlayerAddr",
            "outputs": [{"name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_nameString", "type": "string"}, {"name": "_affCode", "type": "bytes32"}, {"name": "_all", "type": "bool"}],
            "name": "registerNameXname",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_nameStr", "type": "string"}],
            "name": "checkIfNameValid",
            "outputs": [{"name": "", "type": "bool"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_addr", "type": "address"}, {"name": "_name", "type": "bytes32"}, {"name": "_affCode", "type": "bytes32"}, {"name": "_all", "type": "bool"}],
            "name": "registerNameXnameFromDapp",
            "outputs": [{"name": "", "type": "bool"}, {"name": "", "type": "uint256"}],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_whatFunction", "type": "bytes32"}, {"name": "_signerA", "type": "uint256"}, {"name": "_signerB", "type": "uint256"}, {"name": "_signerC", "type": "uint256"}],
            "name": "checkSignersByAddress",
            "outputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"}, {"name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_gameID", "type": "uint256"}],
            "name": "addMeToGame",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_pID", "type": "uint256"}],
            "name": "getPlayerName",
            "outputs": [{"name": "", "type": "bytes32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_nameString", "type": "string"}, {"name": "_affCode", "type": "uint256"}, {"name": "_all", "type": "bool"}],
            "name": "registerNameXID",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}],
            "name": "plyrNameList_",
            "outputs": [{"name": "", "type": "bytes32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_whatFunction", "type": "bytes32"}],
            "name": "checkData",
            "outputs": [{"name": "", "type": "bytes32"}, {"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_addr", "type": "address"}, {"name": "_name", "type": "bytes32"}, {"name": "_affCode", "type": "address"}, {"name": "_all", "type": "bool"}],
            "name": "registerNameXaddrFromDapp",
            "outputs": [{"name": "", "type": "bool"}, {"name": "", "type": "uint256"}],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_nameString", "type": "string"}],
            "name": "useMyOldName",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {"constant": true, "inputs": [], "name": "gID_", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}, {
            "constant": false,
            "inputs": [{"name": "_addr", "type": "address"}, {"name": "_name", "type": "bytes32"}, {"name": "_affCode", "type": "uint256"}, {"name": "_all", "type": "bool"}],
            "name": "registerNameXIDFromDapp",
            "outputs": [{"name": "", "type": "bool"}, {"name": "", "type": "uint256"}],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_fee", "type": "uint256"}],
            "name": "setRegistrationFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}],
            "name": "games_",
            "outputs": [{"name": "", "type": "address"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "address"}],
            "name": "gameIDs_",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "", "type": "uint256"}],
            "name": "plyr_",
            "outputs": [{"name": "addr", "type": "address"}, {"name": "name", "type": "bytes32"}, {"name": "laff", "type": "uint256"}, {"name": "names", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_pID", "type": "uint256"}],
            "name": "getPlayerLAff",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{"name": "_addr", "type": "address"}],
            "name": "getPlayerID",
            "outputs": [{"name": "", "type": "uint256"}],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{"name": "_whatFunction", "type": "bytes32"}, {"name": "_signerA", "type": "uint256"}, {"name": "_signerB", "type": "uint256"}, {"name": "_signerC", "type": "uint256"}],
            "name": "checkSignersByName",
            "outputs": [{"name": "", "type": "bytes32"}, {"name": "", "type": "bytes32"}, {"name": "", "type": "bytes32"}],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {
            "anonymous": false,
            "inputs": [{"indexed": true, "name": "playerID", "type": "uint256"}, {"indexed": true, "name": "playerAddress", "type": "address"}, {
                "indexed": true,
                "name": "playerName",
                "type": "bytes32"
            }, {"indexed": false, "name": "isNewPlayer", "type": "bool"}, {"indexed": false, "name": "affiliateID", "type": "uint256"}, {
                "indexed": false,
                "name": "affiliateAddress",
                "type": "address"
            }, {"indexed": false, "name": "affiliateName", "type": "bytes32"}, {"indexed": false, "name": "amountPaid", "type": "uint256"}, {"indexed": false, "name": "timeStamp", "type": "uint256"}],
            "name": "onNewName",
            "type": "event"
        }],
        web3: null,
        toastr: null,
        isMetaMask: false,
        referredByAddr: '0x315CEA9d9c15B126a96dbaEA663B5Eb538FDd090',
        p3dMasterNodeAddr: '0x315CEA9d9c15B126a96dbaEA663B5Eb538FDd090',
        snipedTokenContract: null,
        snipedContractAddr: '',
        p3DTokenContract: null,
        p3DContractAddr: '',
        playerbookContract: null,
        playerbookContractAddr: '',
        _getNetwork: async function () {
            //gets the eth network connected, and sets variables accordingly
            let that = this;
            try {
                let getNetwork = await promisify(cb => that.web3.version.getNetwork(cb));
                that.ethNetwork = getNetwork;
                switch (getNetwork) {

                    case "1":
                        $('#txt-network').html('<span style="font-size:14px;">Network:</span> <b>Mainnet</b>');
                        that.etherscanAddr = 'https://etherscan.io';
                        that.snipedContractAddr = '0x6d534b48835701312ebc904d4b37e54d4f7d039f';
                        that.p3DContractAddr = '0xb3775fb83f7d12a36e0475abdd1fca35c091efbe';
                        that.playerbookContractAddr = '0xD60d353610D9a5Ca478769D371b53CEfAA7B6E4c';
                        //$('.p3x-contract-etherscan-link').attr('href', that.etherscanAddr + '/address/' + that.P3XTokenAddress);
                        //$('.p3d-contract-etherscan-link').attr('href', that.etherscanAddr + '/address/' + that.P3DTokenAddr);
                        break;
                    case "3":
                        $('#txt-network').html('<span style="font-size:14px;">Network:</span> <b>Ropsten</b>');
                        // that.etherscanAddr = 'https://ropsten.etherscan.io';
                        // that.snipedContractAddr = '0x058a144951e062fc14f310057d2fd9ef0cf5095b';
                        // that.p3DContractAddr = '0x765a944008f08e8366c4ac4c88db63961f65be79';
                        // that.playerbookContractAddr = '0x37ceaad5d949818cba87f155143290a8eb6ae501';
                        //$('.p3x-contract-etherscan-link').attr('href', that.etherscanAddr + '/address/' + that.P3XTokenAddress);
                        //$('.p3d-contract-etherscan-link').attr('href', that.etherscanAddr + '/address/' + that.P3DTokenAddr);
                        break;
                    case "4":
                        $('#txt-network').html('<span style="font-size:14px;">Network:</span> <b>Rinkeby</b>');
                        that.etherscanAddr = 'https://rinkeby.etherscan.io';
                        that.snipedContractAddr = '0x28c4be9f6ec40851a6116952cfd440a1f32989d4';
                        that.p3DContractAddr = '0x35f06858577b526a9351C6d42c89748281b6FE30';
                        that.playerbookContractAddr = '0x572684f35e839917e960d030c78e23a642686d90';
                        //$('.p3x-contract-etherscan-link').attr('href', that.etherscanAddr + '/address/' + that.P3XTokenAddress);
                        //$('.p3d-contract-etherscan-link').attr('href', that.etherscanAddr + '/address/' + that.P3DTokenAddr);
                        break;
                    default:
                        $('#txt-network').html('<span style="font-size:14px;">Network:</span> <b>Unknown</b>');
                        this.etherscanAddr = 'https://etherscan.io';
                }
            }
            catch (error) {
                console.log(error);
                window.sniped.toastr.error('There was an error identifying the network.');
            }
        },
        _setMasternode: function () {
            //saves masternode to localStorage and builds masternode link
            let masternode = this._getURL(window.location.search.substring(1)).ref;
            if (this.web3.isAddress(masternode)) {
                localStorage.setItem("ref", masternode);
            }
            let ref = localStorage.getItem("ref");
            if (ref !== null) {
                this.referredByAddr = ref;
            }

            //set in UI
            let path = window.location.protocol + '//' + window.location.hostname + '/sniped/sniped';
            $('#masternode-link-address').attr('href', path + '/?ref=' + this.web3.eth.accounts[0]).text(path + '/?ref=' + this.web3.eth.accounts[0]);
            $('#masternode-hidden').val(path + '/?ref=' + this.web3.eth.accounts[0]);
        },
        _hideOverlay: function () {
            //hide page loading overlay
            $('#loading-animation').hide();
        },
        _getURL: function (query) {
            //used for maternodes
            let vars = query.split("&");
            let query_string = {};
            for (var i = 0; i < vars.length; i++) {
                let pair = vars[i].split("=");
                // If first entry with this name
                if (typeof query_string[pair[0]] === "undefined") {
                    query_string[pair[0]] = decodeURIComponent(pair[1]);
                    // If second entry with this name
                } else if (typeof query_string[pair[0]] === "string") {
                    var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                    query_string[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    query_string[pair[0]].push(decodeURIComponent(pair[1]));
                }
            }
            return query_string;
        },
        _copyToClipboard: function () {
            var copyText = document.getElementById('masternode-hidden');
            console.log(copyText);
            copyText.select();
            document.execCommand("copy");
            alert("Copied the text: " + copyText.value);
        },
        _EventWatchers_CopyToClipboard: function () {
            $(document).on('click', '.btn-copy-to-clipboard', function () {
                window.sniped._copyToClipboard();
            });
        },
        _EventWatcher_BuyVanity: function () {
            $(document).on('click', '#game-buy-vanity', function () {
                if (typeof window.sniped.web3.eth.accounts[0] !== 'undefined') {
                    let name = $('#game-vanity-name').val();
                    if (name !== '') {
                        window.sniped.playerbookContract.registerNameXaddr(name, window.sniped.referredByAddr, true, {value: parseInt(BigNumber(1e16))}, function (error, result) {
                            if (!error) {
                                window.sniped.toastr.success('Transaction has been submitted to the blockchain.');
                            }
                            else {
                                window.sniped.toastr.error('Transaction was cancelled by user.');
                            }
                        })
                    }
                    else {
                        alert('Name cannot be blank.');
                    }
                }
                else {
                    alert('Please login to metamask or another ethereum browser.');
                }
            });
        },
        _EventWatchers_Donate: function () {
            $(document).on('click', '.btn-donate', function () {
                if (typeof window.sniped.web3.eth.accounts[0] !== 'undefined') {
                    var details = {
                        to: window.sniped.referredByAddr,
                        value: '100000000000000000',
                    };
                    window.sniped.web3.eth.sendTransaction(details, function (error, transHash) {
                        if (!error) {
                            window.sniped.toastr.success('Transaction has been submitted to the blockchain.');
                        }
                        else {
                            window.sniped.toastr.error('Transaction was cancelled by user.');
                        }
                    });
                }
                else {
                    alert('Please login to metamask or another ethereum browser.');
                }
            });
        },
        _EventWatchers_ShootTarget: function () {
            $(document).on('click', '.game-shoot-target', function () {
                if (typeof window.sniped.web3.eth.accounts[0] !== 'undefined') {
                    window.sniped.snipedTokenContract.shootTarget($(this).data('player-formation'), function (error, result) {
                        if (!error) {
                            window.sniped.toastr.success('Transaction has been submitted to the blockchain.');
                        }
                        else {
                            window.sniped.toastr.error('Transaction was cancelled by user.');
                        }
                    })
                }
                else {
                    alert('Please login to metamask or another ethereum browser.');
                }
            });
        },
        _EventWatchers_SendRefund: function () {
            $(document).on('click', '#game-send-refund', function () {
                if (typeof window.sniped.web3.eth.accounts[0] !== 'undefined') {
                    window.sniped.snipedTokenContract.Payoutnextrefund(function (error, result) {
                        if (!error) {
                            window.sniped.toastr.success('Transaction has been submitted to the blockchain.');
                        }
                        else {
                            window.sniped.toastr.error('Transaction was cancelled by user.');
                        }
                    })
                }
                else {
                    alert('Please login to metamask or another ethereum browser.');
                }
            });

        },
        _EventWatchers_ShootRandom: function () {
            $(document).on('click', '#game-shoot-random', function () {
                if (typeof window.sniped.web3.eth.accounts[0] !== 'undefined') {
                    window.sniped.snipedTokenContract.shootSemiRandom(function (error, result) {
                        if (!error) {
                            window.sniped.toastr.success('Transaction has been submitted to the blockchain.');
                        }
                        else {
                            window.sniped.toastr.error('Transaction was cancelled by user.');
                        }
                    })
                }
                else {
                    alert('Please login to metamask or another ethereum browser.');
                }
            });

        },
        _EventWatchers_SendInSoldier: function () {
            $(document).on('click', '#game-send-in-soldier', function () {
                if (typeof window.sniped.web3.eth.accounts[0] !== 'undefined') {
                    console.log(window.sniped.p3dMasterNodeAddr + ', ' + window.sniped.referredByAddr);
                    window.sniped.snipedTokenContract.sendInSoldierReferal(window.sniped.p3dMasterNodeAddr, window.sniped.referredByAddr, {value: '100000000000000000'}, function (error, result) {
                        if (!error) {
                            window.sniped.toastr.success('Transaction has been submitted to the blockchain.');
                        }
                        else {
                            window.sniped.toastr.error('Transaction was cancelled by user.');
                        }
                    })
                }
                else {
                    alert('Please login to metamask or another ethereum browser.');
                }
            });

        },
        _blocksTillTargetShoot: async function () {
            let result = await promisify(cb => this.snipedTokenContract.blocksTillTargetShoot(this.web3.eth.accounts[0], cb));
            this.blockTillTargetShot = result;
            this.el('#game-blocks-till-target').innerHTML = result;
            console.log('_blocksTillTargetShoot: ' + result);
        },
        _blocksTillRandomShoot: async function () {
            let result = await promisify(cb => this.snipedTokenContract.blocksTillSemiShoot(this.web3.eth.accounts[0], cb));
            this.blockTillRandomShot = result;
            this.el('#game-blocks-till-random').innerHTML = result;
            console.log('_blocksTillRandomShoot: ' + result);
        },
        _numberOfSoldiers: async function () {
            let result = await promisify(cb => this.snipedTokenContract.balances(this.web3.eth.accounts[0], cb));
            this.NumOfSoldiers = result;
            this.el('#game-soldiers').innerHTML = result;
            console.log('_numberOfSoldiers: ' + result);

        },
        _numberOfBullets: async function () {
            let result = await promisify(cb => this.snipedTokenContract.bullets(this.web3.eth.accounts[0], cb));
            this.NumOfBullets = result;
            this.el('#game-bullets').innerHTML = result;
            console.log('_numberOfBullets: ' + result);
        },
        _listPlayers: async function () {
            try {
                let nextFormation = await promisify(cb => this.snipedTokenContract.nextFormation(cb)), disabled = '', canShoot = this._canShootDirect(), toolTip='', loopFormations = [];
                this.nextFormation = nextFormation['c'][0];
                //console.log('111 Next Formation: ' + this.nextFormation);


                this.el('#players').innerHTML = '';
                for (i = 0; i < this.nextFormation; i++) {
                    loopFormations.push(i);
                }
                //console.log(loopFormations);
                for (const forms of loopFormations) {
                    //console.log('New Formations:   ' + forms);
                    let formation = await promisify(cb => this.snipedTokenContract.formation(forms, cb)), vanity = '';
                    if (canShoot !== true) {
                        disabled = 'disabled';
                        toolTip = canShoot;
                    }
                    else {
                        disabled = '';
                        toolTip = 'Shoot this mofo!';
                    }
                    if(formation==window.sniped.web3.eth.accounts[0]){
                        disabled = 'disabled';
                        toolTip = 'Dont shoot yourself!!';
                    }
                    //console.log('Formation: ' + formation);
                    vanity = await this._PlayerbookConversion(formation);
                    //console.log('Vanity: ' + vanity + ' ----------------------------------------------------');
                    playerStr = `
                            <div class="player-item col-lg-2" style="text-align: center;font-size:20px;margin-bottom:10px;">
                                 <div class="card" style="height:auto; width: 100%;">
                                      <div class="card-body text-center">
                                          <p class="card-text" style="text-align: center;font-size:12px;"><b>` + vanity + `</b></p>
                                           <img src="assets/img/battlefield-4-sniper.png" style="width:70px;">
                                           <div class="tool-tip tooltip-block-shoot-target" data-toggle="tooltip" data-placement="top" data-html="true" data-original-title="` + toolTip + `">
                                              <button type="button" ` + disabled + ` class="game-shoot-target btn btn-sm btn-primary mt-2" style="width:100%;" data-player-formation="` + forms + `">Shoot</button>
                                          </div>
                                      </div>
                                 </div>
                            </div>
                            `;
                    //console.log(playerStr);
                    $('#players').append(playerStr);
                    $('[data-toggle="tooltip"]').tooltip();
                    $('[data-toggle="tooltip"]').tooltip();
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        _canShootDirect: function () {
            if (this.NumOfSoldiers < 1) {
                return 'You cannot shoot yet.<br/>You need to train soldiers first.';
            }
            if (this.NumOfBullets < 1) {
                return 'You do not have any bullets.';
            }
            if (this.blockTillTargetShot > 0) {
                return "You must wait until Blocks Until Aimed Shot is 0.";
            }

            if (typeof this.web3.eth.accounts[0] === 'undefined') {
                return 'Use MetaMask to play!';
            }
            return true;
        },
        _canShootRandom: function () {
            if (this.NumOfSoldiers < 1) {
                return 'You cannot shoot yet.<br/>You need to train soldiers first.';
            }
            if (this.NumOfBullets < 1) {
                return 'You do not have any bullets.';
            }
            if (this.blockTillRandomShot > 0) {
                return 'You must wait until Blocks Until Random Shot is 0.';
            }
            if (typeof this.web3.eth.accounts[0] === 'undefined') {
                return 'Use MetaMask to play!';
            }
            return 'true';
        },
        _p3dBalance: async function () {
            let result = await promisify(cb => this.snipedTokenContract.amountofp3d(cb));
            this.el('#game-p3d-balance').innerHTML = web3.fromWei(result, 'ether').toFixed(4) + ' P3D';
            console.log('P3D Balance: ' + web3.fromWei(result, 'ether').toFixed(4) + ' P3D');
        },
        _refundPot: async function () {
            let result = await promisify(cb => this.snipedTokenContract.Refundpot(cb));
            this.el('#game-refund-pot').innerHTML = web3.fromWei(result, 'ether').toFixed(4) + ' ETH';
            console.log('Refund Pot: ' + web3.fromWei(result, 'ether').toFixed(4) + ' ETH');
            if (web3.fromWei(result, 'ether').toFixed(4) >= 0.1) {
                this.el('#game-send-refund').disabled = false;
                this.el('#game-send-refund-div').setAttribute('title', 'Refund the next player in line.<br/><i>How nice of you!</i> 😊');
            }
            else {
                this.el('#game-send-refund').disabled = true;
                this.el('#game-send-refund-div').setAttribute('title', 'There must be at least 0.1 ETH in the refund pot to trigger the refund. 😊');
            }
        },
        _playerDivs: async function () {
            let result = await promisify(cb => this.snipedTokenContract.dividendsOwing(this.web3.eth.accounts[0], cb));
            this.el('#game-player-divs').innerHTML = web3.fromWei(result, 'ether').toFixed(4) + ' ETH';
            console.log('Player Divs: ' + web3.fromWei(result, 'ether').toFixed(4) + ' ETH');
        },
        _contractEventWatchers: function () {
            window.sniped.snipedTokenContract.death(function (error, result) {
                if (result == window.sniped.web3.eth.accounts[0]) {
                    window.sniped.toastr.success('One of your soldiers just got killed!');
                    console.log('One of your soldiers just got killed!');
                }
                else {
                    window.sniped._PlayerbookConversion(result, function (name) {
                        console.log(result);
                        window.sniped.toastr.success(name + ' just got killed.');
                        console.log(name + ' just got killed.');
                    }, window.sniped);
                }
            });
            window.sniped.snipedTokenContract.semiShot(function (error, result) {
                console.log(result);
                if (result == window.sniped.web3.eth.accounts[0]) {
                    window.sniped.toastr.success('You just shot a random soldier.');
                    console.log('You just shot a random soldier.');
                }
                else {
                    window.sniped.toastr.success('Someone just shot a random soldier.');
                    console.log('Someone just shot a random soldier.');
                }
            });
            window.sniped.snipedTokenContract.targetShot(function (error, result) {
                console.log(result);
                if (result == window.sniped.web3.eth.accounts[0]) {
                    window.sniped.toastr.success('You just target shot a soldier.');
                    console.log('You just target shot a soldier.');
                }
                else {
                    window.sniped.toastr.success('Someone just target shot a soldier.');
                    console.log('Someone just target shot a soldier.');
                }
            });
        },
        _PlayerbookConversion: async function (address) {
            var PlayerName = '';
            var that = this;
            let pid = await promisify(cb => this.playerbookContract.pIDxAddr_(address, cb));

            //console.log('Vanity Address: ' + address);
            var pID = pid['c'][0];
            //console.log('Player ID: ' + pID);
            if (pID) {
                let name = await promisify(cb => this.playerbookContract.getPlayerName(pID, cb));
                PlayerName = that.web3.toUtf8(name);

                if (PlayerName != '') {
                    //console.log('Player Name: ' + PlayerName);
                    return PlayerName;

                }
                else {
                    if (address.substring(0, 2) == '0x' && address.length == 42) {
                        //console.log('1: ' + address.substring(0, 6) + '...' + address.substring(36, 42));
                        return address.substring(0, 6) + '...' + address.substring(36, 42);
                    }
                    else {
                        return address;
                    }
                }
            }
            else {
                if (address.substring(0, 2) == '0x' && address.length == 42) {
                    //console.log('2: ' + address.substring(0, 6) + '...' + address.substring(36, 42));
                    return address.substring(0, 6) + '...' + address.substring(36, 42);
                }
                else {
                    //console.log(address);
                    return address;
                }
            }
        },
        _init: async function (_web3, toastr) {
            window.sniped = this;
            this.web3 = _web3;
            this.toastr = toastr;
            this.toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": true,
                "progressBar": false,
                "positionClass": "toast-bottom-right",
                "preventDuplicates": true,
                "showDuration": "9000",
                "hideDuration": "9000",
                "timeOut": "9000",
                "extendedTimeOut": "6666",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            await this._getNetwork();
            if (typeof this.web3 !== 'undefined') {
                this.isMetaMask = this.web3.currentProvider.isMetaMask;
                this.snipedTokenContract = this.web3.eth.contract(this.snipedAbi).at(this.snipedContractAddr);
                this.p3DTokenContract = this.web3.eth.contract(this.p3DAbi).at(this.p3DContractAddr);
                this.playerbookContract = this.web3.eth.contract(this.playerbookAbi).at(this.playerbookContractAddr);

                var that = this;
                if (typeof this.web3.eth.accounts[0] !== 'undefined') {
                    let name = await this._PlayerbookConversion(this.web3.eth.accounts[0]);
                    that.el('#player-details-address').innerHTML = this.web3.eth.accounts[0];
                    that.el('#player-details-vanity').innerHTML = name;
                }
                else {
                    that.el('#player-details-address').innerHTML = 'Not Logged In';
                    that.el('#player-details-vanity').innerHTML = 'Not Logged In';
                }
            }
        },
        el: function (id) {
            return document.querySelector(id);
        },
        start: async function (web3, toastr) {

            await this._init(web3, toastr);
            await this._setMasternode();
            await this._EventWatchers_ShootRandom();
            await this._EventWatchers_ShootTarget();
            await this._EventWatchers_SendInSoldier();
            await this._EventWatcher_BuyVanity();
            await this._EventWatchers_SendRefund();
            await this._EventWatchers_Donate();
            this._EventWatchers_CopyToClipboard();
            await this._contractEventWatchers();
            if (typeof this.web3.eth.accounts[0] !== 'undefined') {
                var that = this;
                $('.tooltip-block-shoot-target').tooltip('hide');

                await this._blocksTillTargetShoot();
                await this._blocksTillRandomShoot();
                await this._numberOfSoldiers();
                await this._numberOfBullets();
                await this._p3dBalance();
                await this._refundPot();
                await this._playerDivs();

                let canShoot = this._canShootRandom();
                if (canShoot !== 'true') {
                    this.el('#game-shoot-random').disabled = true;
                    this.el('#game-shoot-random-div').setAttribute('data-original-title', canShoot);
                }
                else {
                    this.el('#game-shoot-random').disabled = false;
                    this.el('#game-shoot-random-div').setAttribute('data-original-title', 'Close your eyes and Shoot!!');
                }
                this._hideOverlay();
                await this._listPlayers();

                setTimeout(function () {
                    $('[data-toggle="tooltip"]').tooltip();
                    $('[data-toggle="popover"]').popover();
                }, 1000);

                await setInterval(async function () {
                    $('.tooltip-block-shoot-target').tooltip('hide');

                    await that._blocksTillTargetShoot();
                    await that._blocksTillRandomShoot();
                    await that._numberOfSoldiers();
                    await that._numberOfBullets();
                    await that._p3dBalance();
                    await that._refundPot();
                    await that._playerDivs();

                    setTimeout(function () {
                        $('[data-toggle="tooltip"]').tooltip();
                        $('[data-toggle="popover"]').popover();
                    }, 1000);
                }, 60000);
            }
            else {
                console.log('Not Logged In');
                await this._p3dBalance();
                await this._refundPot();
                await this._listPlayers();
            }
        }
    }
;