const adress_contract = '0x2fe329b5132Df98076EF3EF3968409a5ceC53922';
const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mintAmount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseExtension",
				"type": "string"
			}
		],
		"name": "setBaseExtension",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_initBaseURI",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseExtension",
		"outputs": [
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
		"name": "baseURI",
		"outputs": [
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
		"name": "cost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
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
		"inputs": [],
		"name": "maxMintAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
		"inputs": [],
		"name": "symbol",
		"outputs": [
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
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
		"name": "totalS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const providersam = new ethers.providers.Web3Provider(window.ethereum);
const signerforam = providersam.getSigner();
const contracts = ethers.ContractFactory.getContract(
	adress_contract,
	abi,
	signerforam
);
const avalibles = document.querySelector('#amount_of_sum_mint');
async function get_amount(){
	hex_amt = await contracts.totalSupply()
	return hex_amt._hex
}
const hexToDecimal = hex => parseInt(hex, 16);
async function ch(){
	avalibles.innerHTML = hexToDecimal(await get_amount())
}
ch()
            async function ConnectAcount(){
                if (window.ethereum){
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
					return accounts
				}
            }
			const swichNetwork = async (chainId) => {
				const currentChainId = 0
				if (currentChainId !== chainId) {
				  try {
					await window.ethereum.currentProvider.request({
					  method: 'wallet_switchEthereumChain',
						params: [{ chainId: window.ethereum.utils.toHex(chainId) }],
					  });
				  } catch (switchError) {
					// This error code indicates that the chain has not been added to MetaMask.
					console.log('error: ', switchError)
				  }
				}
			  }
			function handleAccountsChanged(accounts) {
				if (accounts.length === 0) {
					ConnectAcount();
					console.log('Please connect to MetaMask.');
				} else{
					//chainId(80001);
					console.log(1)
					Mint();
				}
			}
            function choser(){
                handleAccountsChanged(ConnectAcount());
            }
            async function Mint(){
                if (window.ethereum){
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const contract = ethers.ContractFactory.getContract(
                        adress_contract,
                        abi,
                        signer
                    );
                try{
					const amountValue = document.querySelector('#amountValue');
                    const respons = await contract.mint(amountValue.value);
					await ch();
                    pop_up('True')
                }catch(err){
					if (err.message == 'MetaMask Tx Signature: User denied transaction signature.'){
						pop_up('You denied Tx');
					}
					else{
						pop_up(err.message)
					}
                }}}
//other func
function sucsess_mint(thxpage){
    window.open(thxpage);
}
function denied_mint(errmessage){
    console.log('error: ', errmessage);
}

function sleep(miliseconds) {
	var currentTime = new Date().getTime();
	while (currentTime + miliseconds >= new Date().getTime()) {
	}
 }

 let images = ['static/donate/1.jpg', 'static/donate/2.jpg', 'static/donate/3.jpg', 'static/donate/4.jpg', 'static/donate/5.jpg'];

 let index = 0;
 const imgElement = document.getElementById('gif_to_mint')
 
 function change() {
	imgElement.src = images[index];
	index > 1 ? index = 0 : index++;
 }
 
 window.onload = function () {
	 setInterval(change, 1000);
 };


function pop_up(arg){
	if (arg == 'True'){
		new Toast({
			title: 'Success mint:',
			text: 'Check on opensea',
			theme: 'success',
			autohide: true,
			interval: 5000
		  });
	}else{
		new Toast({
			title: 'Some went wrong:',
			text: arg,
			theme: 'danger',
			autohide: true,
			interval: 5000
		  });
	}
}

function error_hendler(err_message){
	const denied = 'MetaMask Tx Signature: User denied transaction signature.';
	const chainType = "Chain type not ethereum mainnet";
	if (err_message == denied){
		return 'You denied Tx';
	}if (err_message == chainType){
		return 'Pls Change chain to Ethereum';
	}
}


function showspider(){
	elem = document.querySelectorAll('spider');
	elem.style = 'display: block;';
	elem.style = 'z-index: 100;';
}

function hidespider(){
	elem = document.querySelectorAll('spider');
	elem.style = 'display: none;';
	elem.style = 'z-index: -1;';
}

const words = {
	'girl1': 'Text1',
	'girl2': 'Text2',
	'girl3': 'Text3',
	'girl4': 'Text4',
	'girl5': 'Text5',
}

girl1 = document.getElementById('girl1')
girl2 = document.getElementById('girl2')
girl3 = document.getElementById('girl3')
girl4 = document.getElementById('girl4')
girl5 = document.getElementById('girl5')

curent = 'girl1'

dots = document.getElementById('dots')

g1 = document.getElementById('g1')
g2 = document.getElementById('g2')
g3 = document.getElementById('g3')
g4 = document.getElementById('g4')
g5 = document.getElementById('g5')

text_of_top = document.getElementById('text1')
text_of_bot = document.getElementById('text2')

g1.onclick = function(){change_text('g4')};
g2.onclick = function(){change_text('g3')};
g3.onclick = function(){change_text('g1')};
g4.onclick = function(){change_text('g2')};
g5.onclick = function(){change_text('g5')};

function change_text(param){
	if (param == 'g1'){
		curent = 'girl1'
		text_of_bot.innerHTML = ''
		text_of_top.innerHTML = words['girl1']
		dots.style.transform = 'translateX(-72px)'
		girl1.style.opacity = '1'
		girl2.style.opacity = '0.5'
		girl3.style.opacity = '0.5'
		girl4.style.opacity = '0.5'
		girl5.style.opacity = '0.5'
	}else if(param=='g2'){
		curent = 'girl2'
		text_of_bot.innerHTML = ''
		text_of_top.innerHTML = words['girl2']
		girl1.style.opacity = '0.5'
		dots.style.transform = ' translateX(89px)'
		girl2.style.opacity = '1'
		girl3.style.opacity = '0.5'
		girl4.style.opacity = '0.5'
		girl5.style.opacity = '0.5'
	}else if(param=='g3'){
		curent = 'girl3'
		text_of_bot.innerHTML = ''
		text_of_top.innerHTML = words['girl3']
		dots.style.transform = 'translateX(-292px)'
		girl1.style.opacity = '0.5'
		girl2.style.opacity = '0.5'
		girl3.style.opacity = '1'
		girl4.style.opacity = '0.5'
		girl5.style.opacity = '0.5'
	}else if(param=='g4'){
		curent = 'girl4'
		text_of_bot.innerHTML = ''
		text_of_top.innerHTML = words['girl4']
		dots.style.transform = 'translateX(-384px)'
		girl1.style.opacity = '0.5'
		girl2.style.opacity = '0.5'
		girl3.style.opacity = '0.5'
		girl4.style.opacity = '1'
		girl5.style.opacity = '0.5'
	}else if(param=='g5'){
		curent = 'girl5'
		text_of_bot.innerHTML = ''
		text_of_top.innerHTML = words['girl5']
		dots.style.transform = 'translateX(120px) rotateY(180deg)'
		girl1.style.opacity = '0.5'
		girl2.style.opacity = '0.5'
		girl3.style.opacity = '0.5'
		girl4.style.opacity = '0.5'
		girl5.style.opacity = '1'
	}
}

function onmous(param){

	if (param == 'girl1' && girl4.style.opacity != '1'){
		girl4.style.opacity = '0.9'
	}else if(param=='girl2' && girl3.style.opacity != '1'){
		girl3.style.opacity = '0.9'
	}else if(param=='girl3' && girl1.style.opacity != '1'){
		girl1.style.opacity = '0.9'
	}else if(param=='girl4' && girl2.style.opacity != '1'){
		girl2.style.opacity = '0.9'
	}else if(param=='girl5' && girl5.style.opacity != '1'){
		girl5.style.opacity = '0.9'
	}
}

function overm(param){

	if (param == 'girl1' && girl4.style.opacity != '1'){
		girl4.style.opacity = '0.5'
	}else if(param=='girl2' && girl3.style.opacity != '1'){
		girl3.style.opacity = '0.5'
	}else if(param=='girl3' && girl1.style.opacity != '1'){
		girl1.style.opacity = '0.5'
	}else if(param=='girl4' && girl2.style.opacity != '1'){
		girl2.style.opacity = '0.5'
	}else if(param=='girl5' && girl5.style.opacity != '1'){
		girl5.style.opacity = '0.5'
	}
	
}

change_text('g1');