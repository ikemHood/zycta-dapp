const testing = true;

export const currentConnection = testing ? "testnet" : "mainnet";
//Factory 0x73eFbc6D23f1a45059322A55cC4ACE74f738d573
//Router 0x8DEacfd407941DB46458148E4952a66B0C7edaCC
export const TOKEN_ADDRESS = {
	ETH: {
		324: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
		280: "0x20b28B1e4665FFf290650586ad76E977EAb90c5D",
	},
	WETH: {
		324: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
		280: "0x294cB514815CAEd9557e6bAA2947d6Cf0733f014",
	},
	STMx: {
		324: "0x577e09A9385092BdcE0d0C3b5C980589c42b4A29",
	},
	USDC: {
		280: "0x0faF6df7054946141266420b43783387A78d82A9",
	},
};

export const NATIVE_TOKEN_ADDRESS: { [index: string]: string } = {
	324: TOKEN_ADDRESS.WETH[324],
	280: TOKEN_ADDRESS.WETH[280],
};

export const ROUTER_ADDRESS: { [index: string]: string } = {
	324: "0x384978feF31e0d4EF4659ff506931Bd3873CC74A",
	280: "0x7C66469075d7cF1a9F7C6650A6aeFb1B71bFCb9B",
};

export const FACTORY_ADDRESS = {
	324: "0x4f5F42348aD0Ccc99C77b30F9003272ce315aCfa",
	280: "0xA2f0BbD9FD0Ad0aE7d6B60C548D686a9Fb39EDEc",
};

export const FARM_ADDRESS: { [index: string]: string } = {
	1: "0xF0301472c7e383310bE1D426aA59207818fB8a53",
	4: "0x57eA8360A59468112cE669EA8bFb2169062EAF0d",
	97: "0xc14c4F5041D62c03b4E18932975C30817A4CB39f",
	56: "0x2A5Ce0C18c885fbc9B41933f79559a6c40208c72",
};

export const MULTICALL_ADDRESS: { [index: string]: string } = {
	324: "0xd9Ee4c1e04059D4B0dd02b747282511bEE4E5fB5",
	280: "0xd9Ee4c1e04059D4B0dd02b747282511bEE4E5fB5",
};

export const farmContractConfig = {
	startBlock: 9829062,
	startTimestamp: 1639730634,
};

export const ETH = "ETH";
export const BNB = "BNB";
export const PBR = "PBR";
export const PWAR = "PWAR";
export const USDT = "USDT";
export const USDC = "USDC";
export const MOVR = "MOVR";
export const WMATIC = "WMATIC";
export const Tst = "Tst";
export const STT = "STT";
export const STMx = "STMx";
export const WETH = "WETH";

export const NATIVE_TOKEN: { [index: number]: string } = {
	324: WETH,
	280: WETH,
	// 324: ETH
};

export const FARM_TOKEN: { [index: number]: string } = {
	1: PBR,
	4: PBR,
	97: PWAR,
	56: PWAR,
};

export const DEFAULT_SWAP_TOKENS = {
	324: ["WETH", "STMx"],
	280: ["WETH", "USDC"],
	// 324: ["ETH", "STMx"]
};

export const DEFAULT_POOL_TOKENS = {
	324: ["WETH", "USDC"],
	280: ["WETH", "USDC"],
	// 324: ["ETH", "STMx"]
};

export const TOKEN_BLACKLIST = [];
export const PAIR_BLACKLIST = [];

export const exchangeFee = 0.2;
export const defaultSlippage = 0.5;
export const defaultTransactionDeadline = 20; //20 minutes

export const etheriumNetwork = "ethereum";
export const bscNetwork = "bsc";
export const moonriverNetwork = "moonriver";
export const maticNetwork = "polygon";
export const mumbainetwork = "mumbai";
export const zksyncNetwork = "zksync";

export const supportedChains = [
	280, 324
];

export const allowanceAmount = "9999999999999999999999999";
export const corgibAllowance = "999999999999999999999999999999999999";

export const BLOCK_EXPLORER = {
	324: "https://explorer.zksync.io/",
	280: "https://explorer.zksync.io/",
};

export const nullAddress = "0x0000000000000000000000000000000000000000";

export const timeframeOptions = {
	WEEK: "1 week",
	MONTH: "1 month",
	ALL_TIME: "All time",
};

export const BUNDLE_ID = "1";

export const swapFnConstants = {
	swapExactETHForTokens: "swapExactETHForTokens", // case 1
	swapETHforExactTokens: "swapETHforExactTokens", // case2
	swapExactTokensForETH: "swapExactTokensForETH", // case3
	swapTokensForExactETH: "swapTokensForExactETH", // case 4
	swapExactTokensForTokens: "swapExactTokensForTokens", // case 5
	swapTokensForExactTokens: "swapTokensForExactTokens", // case 6
	swapExactIn: "swapExactIn", // tradeType case 1
	swapExactOut: "swapExactOut", // tradeType case 2
};

export const liquidityPoolConstants = {
	exactIn: "exactIn",
	exactOut: "exactOut",
};

export const THRESOLD_VALUE = 0.00001;
export const THRESOLD_WEI_VALUE = 100000000000000;

export const supportedFarmingPools = {
	1: ["PBR-ETH", "ETH-USDT"],
	4: ["PBR-ETH", "ETH-USDT"],
	56: ["PBR-BNB", "PWAR-BNB", "BNB-USDT"],
	97: ["PWAR-BNB", "BNB-USDT"],
};

export const farmingPoolConstants = {
	1: {
		"PBR-ETH": {
			multiplier: 40,
			pid: 0,
			address: "0x173cF7c7356f71c3e75cE02F9cC777Fb762B5080",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 18,
		},
		"ETH-USDT": {
			multiplier: 5,
			pid: 1,
			address: "0xdda0A346D267a48EC74CC68979584d85501fe5D5",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 12,
		},
	},
	4: {
		"PBR-ETH": {
			multiplier: 40,
			pid: 0,
			address: "0x306dd2eB9DDACeecdbA4cfA0EccC009e7291cDDE",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 18,
		},
		"ETH-USDT": {
			multiplier: 5,
			pid: 1,
			address: "0x17398F4101dac7c9C1d637b1139EEA9D3d700250",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 12,
		},
	},
	56: {
		"PBR-BNB": {
			multiplier: 50,
			pid: 2,
			address: "0xD2F64768FEa0591499344d79627ac7c4a43071D1",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 18,
		},
		"PWAR-BNB": {
			multiplier: 40,
			pid: 0,
			address: "0xc1197ffbd177b1e6cc16a00db86e45516898e116",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 18,
		},
		"BNB-USDT": {
			multiplier: 5,
			pid: 1,
			address: "0xd044646e11112f806731f16495632e2db00d171f",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 12,
		},
	},
	97: {
		"PWAR-BNB": {
			multiplier: 40,
			pid: 0,
			address: "0x767929Ec1AE0E66710Fc1D4CA9F0E33cF3bf3A37",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 18,
		},
		"BNB-USDT": {
			multiplier: 5,
			pid: 1,
			address: "0x0AD6e5af7A4Da3006B393A91576860c14a562442",
			blocksPerYear: "",
			lpApr: 0,
			decimals: 12,
		},
	},
};

export const RINKEBY_BLOCK_TIME = 15;
export const PBR_PER_BLOCK = 0.5;
export const BLOCKS_PER_YEAR = (60 / RINKEBY_BLOCK_TIME) * 60 * 24 * 365;
export const PBR_PER_YEAR = PBR_PER_BLOCK * BLOCKS_PER_YEAR;

export const PWAR_PER_BLOCK = 0.6;
export const BLOCKS_PER_YEAR_BSC = 10220000;
export const PWAR_PER_YEAR = PWAR_PER_BLOCK * BLOCKS_PER_YEAR_BSC;

export const REWARD_TOKEN_PER_YEAR = {
	1: PBR_PER_YEAR,
	56: PWAR_PER_YEAR,
};

export const BASE_URL = window.location.origin.includes("localhost")? "http://localhost:3000" : window.location.origin;

export const SWAP_BASES: { [index: string]: Array<string> } = {
	324: ["WETH", "STMx", "ETH"],
};

export const NetworkContextName = "NETWORK";

export const BLACK_LIST_PAIRS_ON_CHART = [
	// "0xdda0a346d267a48ec74cc68979584d85501fe5d5", // ETH-USDT  MAINNET
	// "0xd044646e11112f806731f16495632e2db00d171f", // BNB-USDT , BSC
];

export const BLACK_LIST_TOKENS_ON_CHART = [
	// "0xdac17f958d2ee523a2206206994597c13d831ec7", // USDT, MAINNET
	// "0x55d398326f99059ff775485246999027b3197955", // usdt bsc
];

export const TransactionStatus = {
	WAITING: "WAITING",
	PENDING: "PENDING",
	COMPLETED: "COMPLETED",
	FAILED: "FAILED",
};
