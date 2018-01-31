const allPlates = [
    {
        "plateId": 4,
        "plateName": "鬼话",
        "plateSource": 1,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155928_9ea1653f8a40199d5896bf59141edf02_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 1,
        "plateName": "大杂烩",
        "plateSource": 1,
        "plateImage": "/mopcms/api/picture/find/image/20170609/cc290829940ed9a676c3b1684a389a12.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 2,
        "plateName": "娱乐八卦",
        "plateSource": 1,
        "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155746_583b16ea3e4b07b593ab3224d9ace7c6_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 3,
        "plateName": "原创区",
        "plateSource": 1,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155752_1d2b5668304648c5a16e88fbce126674_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 6,
        "plateName": "人肉搜索",
        "plateSource": 1,
        "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153727_fddb7baab827a9aa04aaecc3c384d04e_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 8,
        "plateName": "军事烩",
        "plateSource": 1,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153739_d96d461488b7ff320bc4a5e78e6f5f85_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 9,
        "plateName": "冷笑话",
        "plateSource": 1,
        "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153747_9881dcec27a8ae7f9f8f281654a056f9_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 11,
        "plateName": "版务",
        "plateSource": 1,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153753_13fe67eb501730d22b14ee545a9e5745_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 17,
        "plateName": "旅游",
        "plateSource": 2,
        "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153759_60479e3a17c7f25e249faaa29a36eff6_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 35,
        "plateName": "猫女郎",
        "plateSource": 2,
        "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153805_5c5a7d953af4f8604317c94b3729bec5_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 36,
        "plateName": "搞笑",
        "plateSource": 2,
        "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153810_b37cae96fe31eb65bf692b57b80d41de_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 37,
        "plateName": "生活馆",
        "plateSource": 2,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153816_df15743b09fd2d22f35e3bdcdcb2819a_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 38,
        "plateName": "萌宠",
        "plateSource": 2,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153822_0c1330fab05dd8b641f9722b73551e73_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 39,
        "plateName": "体育",
        "plateSource": 2,
        "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155657_aa289ea4c0fd54dcae35f2174de30af4_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 40,
        "plateName": "数码",
        "plateSource": 2,
        "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155702_886561b7a26fd9978d828daa7163c4ad_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 68,
        "plateName": "明星",
        "plateSource": 2,
        "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155708_cc8a9c0be5de86b60034cf3d13c3f729_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 69,
        "plateName": "摄影",
        "plateSource": 2,
        "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155713_2e23cd5e4f0e8359a9efba8543821b22_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 94,
        "plateName": "猫眼天下",
        "plateSource": 2,
        "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155718_35c485fe0b8606ef6db008479090880a_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 109,
        "plateName": "校园",
        "plateSource": 2,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155724_f150d60a4e9e15ed9c41b3f84ef55eec_1.jpg",
        "plateDesc": "",
        "follow": false
    },
    {
        "plateId": 113,
        "plateName": "社区服务",
        "plateSource": 2,
        "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155731_8d565d580ae395a911d004abfbed2d29_1.jpg",
        "plateDesc": "",
        "follow": false
    }
];

const recommendPlates = [{
    "plateId": 0,
    "plateName": "推荐",
    'colid': '999999'
},
{
    "plateId": 1,
    "plateName": "大杂烩",
    'colid': '100001',
    "plateSource": 1,
    "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155740_e3bc51cd27bceeec9cff834dcfcf2638_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 2,
    "plateName": "娱乐八卦",
    'colid': '100002',
    "plateSource": 1,
    "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155746_583b16ea3e4b07b593ab3224d9ace7c6_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 3,
    "plateName": "原创区",
    'colid': '100003',
    "plateSource": 1,
    "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155752_1d2b5668304648c5a16e88fbce126674_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 35,
    "plateName": "猫女郎",
    'colid': '200009',
    "plateSource": 2,
    "plateImage": "http://ddtest02.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153805_5c5a7d953af4f8604317c94b3729bec5_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 4,
    "plateName": "鬼话",
    'colid': '100004',
    "plateSource": 1,
    "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607155928_9ea1653f8a40199d5896bf59141edf02_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 36,
    "plateName": "搞笑",
    'colid': '200002',
    "plateSource": 2,
    "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153810_b37cae96fe31eb65bf692b57b80d41de_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 38,
    "plateName": "萌宠",
    'colid': '200013',
    "plateSource": 2,
    "plateImage": "http://ddtest00.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153822_0c1330fab05dd8b641f9722b73551e73_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 9,
    "plateName": "冷笑话",
    'colid': '100009',
    "plateSource": 1,
    "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153747_9881dcec27a8ae7f9f8f281654a056f9_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 17,
    "plateName": "旅游",
    'colid': '200005',
    "plateSource": 2,
    "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153759_60479e3a17c7f25e249faaa29a36eff6_1.jpg",
    "plateDesc": "",
    "follow": false
},
{
    "plateId": 7,
    "plateName": "汽车烩",
    'colid': '100007',
    "plateSource": 1,
    "plateImage": "http://ddtest01.w.wcsapi.biz.matocloud.com/ddtest/20170607/20170607153733_63a9fde73d8adb546267fc03986084f9_1.jpg",
    "plateDesc": "",
    "follow": false
}];

export {
	allPlates,
    recommendPlates
};