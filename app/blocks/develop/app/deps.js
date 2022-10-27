
'use strict'

module.exports = {

	nodes: [],

	modules: [
		{
			from: 'app/blocks/common/header/',
			inject: [ 'header.js' ],
		},
		{
			from: 'app/blocks/plugins/swiper/',
			inject: [ 'swiper.js' ],
		},
		{
			from: 'app/blocks/sections/donate/',
			inject: [ 'donate.js' ],
		},
		{
			from: 'app/blocks/common/head/',
			inject: [ 'ethers.js' ],
		},
		{
			from: 'app/blocks/common/head/',
			inject: [ 'mint.js' ],
		},		
		{
			from: 'app/blocks/common/head/',
			inject: [ 'toast.min.css' ],
		},		
		{
			from: 'app/blocks/common/head/',
			inject: [ 'toast.min.js' ],
		},
	],

}
