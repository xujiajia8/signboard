function ltopAjax1(ltopData1) {
    var myChart = echarts.init(document.getElementById('ltop1'));
    var option = {
        title: {
            // text: '总性别比例',
            x: 'center',
            top: '18%',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid: {
            left: '0%',
            bottom: '0%',
            containLabel: true
        },
        
        series: [{
            name: '数量',
            type: 'pie',
            radius: '55%',
            center: ['55%', '60%'],
            color: ['rgba(26,208,245,0.3)', 'rgba(0,208,245,0.8)'],
            label: {
                normal: {
                formatter:'{b}\n{d}%'
                }
            },
            labelLine: {
                show: false,
                length:8,
                length2:0,
            },
            data: ltopData1,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    shadowColor: 'RGBA(0, 67, 93, 0.5)',
                    shadowColor: 'red'
                }
            }
        }]
    };
    myChart.setOption(option);
        // echart图表自适应
        window.addEventListener("resize", function() {
            myChart.resize();
        });
}
function ltopAjax2(ltopData2){
    var myChart = echarts.init(document.getElementById('ltop2'));
    var option = {
        title: {
            // text: '门诊住院比例',
            // subtext: '纯属虚构',
            x: 'center',
            top: '18%',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
            left: '0%',
            right: '75%',
            top: '30%',
            containLabel: true
        },

        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        //     textStyle: {
        //         color: '#fff',
        //     }
        // },
        series: [{
            name: '数量',
            type: 'pie',
            radius: ['35%', '55%'],
            center: ["45%", "60%"], 　
            avoidLabelOverlap: false,
            color: ['rgba(26,190,245,0.3)', 'rgba(0,208,245,0.8)'],
            label: {
                normal: {
                formatter:'{b}\n{d}%'
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:0,
                    length2:0,
                }
            },
            data: ltopData2
        }]
    };

    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function radarAjax1(xradarData,yradarData) {
    var myChart = echarts.init(document.getElementById('radar1'));
    var indicatorData=[]
    for(var i=0;i<xradarData.length;i++){
        var obj={}
        obj.name=xradarData[i];
        obj.max=100
        indicatorData.push(obj)
    }
    var option = {
        title: {
            // text: '表记录比例',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            },
            top:'10%',
            left:'10%',
        },
        tooltip: {},
        // legend: {
        //     // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },

        radar: {
            // shape: 'circle',
            nameGap : 6,
            radius: "55%", //大小
            grid: { // 控制图的大小，调整下面这些值就可以，
                x: 40,
                x2: 100,
                y2: 150// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
            },
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#fff',
                    // backgroundColor: '#999',
                    // borderRadius: 3,
                    // padding: [3, 5]
               }
            },
            indicator:indicatorData,
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#006B82',
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine : {
                show : true,
                lineStyle : {
                    width : 1,
                    color : '#006B82' // 图表背景网格线的颜色
                }
            },
            splitArea : {
                show : true,    
                areaStyle : {
                    color: ["#1A4861"]  // 图表背景网格的颜色
                }
            },
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    lineStyle: {
                        color:"transparent" // 图表中各个图区域的边框线颜色
                    },
                    areaStyle: {
                        color:{ 
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(4,238,254,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(71,113,236,1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false},
                        // 'linear-gradient(0deg, 0%,) 100%)'
                    }
                }
                }
            },
            data : [
                 {
                    value :yradarData,
                    // name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function radarAjax2(xradarData,yradarData) {
    var indicatorData=[]
    for(var i=0;i<xradarData.length;i++){
        var obj={}
        obj.name=xradarData[i];
        obj.max=100
        indicatorData.push(obj)
    }
    var myChart = echarts.init(document.getElementById('radar2'));
    var option = {
        title: {
            // text: '表记录比例',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            },
            top:'10%',
            left:'10%',
        },
        tooltip: {},
        // legend: {
        //     // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },
        radar: {
            // shape: 'circle',
            nameGap : 6,
            radius: "55%", //大小
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#fff',
                    // backgroundColor: '#999',
                    // borderRadius: 3,
                    // padding: [3, 5]
               }
            },
            
            indicator:indicatorData,
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#006B82' ,
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine : {
                show : true,
                lineStyle : {
                    width : 1,
                    color : '#006B82'  // 图表背景网格线的颜色
                }
            },
            splitArea : {
                show : true,    
                areaStyle : {
                    color: ["#1A4861"]  // 图表背景网格的颜色
                }
            },
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    lineStyle: {
                        color:"transparent" // 图表中各个图区域的边框线颜色
                    },
                    areaStyle: {
                        color:{ 
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(4,238,254,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(71,113,236,1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false},
                        // 'linear-gradient(0deg, 0%,) 100%)'
                    }
                }
                }
            },
            data : [
                 {
                    value : yradarData,
                    // name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function radarAjax3(xradarData,yradarData) {
    var indicatorData=[]
    for(var i=0;i<xradarData.length;i++){
        var obj={}
        obj.name=xradarData[i];
        obj.max=100
        indicatorData.push(obj)
    }
    var myChart = echarts.init(document.getElementById('radar3'));
    var option = {
        title: {
            // text: '表记录比例',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            },
            top:'10%',
            left:'10%',
        },
        tooltip: {},
        // legend: {
        //     // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },
        radar: {
            // shape: 'circle',
            nameGap : 6,
            splitNumber: 4,
            radius: "55%", //大小
            name: {
                textStyle: {
                    color: '#fff',
                    // backgroundColor: '#999',
                    // borderRadius: 3,
                    // padding: [3, 5]
               },
               margin:0,
            },
            indicator:indicatorData,
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#006B82' ,
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine : {
                show : true,
                lineStyle : {
                    width : 1,
                    color : '#006B82'  // 图表背景网格线的颜色
                }
            },
            splitArea : {
                show : true,    
                areaStyle : {
                    color: ["#1A4861"]  // 图表背景网格的颜色
                }
            },
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    lineStyle: {
                        color:"transparent" // 图表中各个图区域的边框线颜色
                    },
                    areaStyle: {
                        color:{ 
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(4,238,254,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(71,113,236,1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false},
                        // 'linear-gradient(0deg, 0%,) 100%)'
                    }
                }
                }
            },
            data : [
                 {
                    value :yradarData,
                    // name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function radarAjax4(xradarData,yradarData) {
    var indicatorData=[]
    for(var i=0;i<xradarData.length;i++){
        var obj={}
        obj.name=xradarData[i];
        obj.max=100
        indicatorData.push(obj)
    }
    var myChart = echarts.init(document.getElementById('radar4'));
    var option = {
        title: {
            // text: '表记录比例',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            },
            top:'10%',
            left:'10%',
        },
        tooltip: {},
        // legend: {
        //     // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },
        radar: {
            // shape: 'circle',
            nameGap : 6,
            splitNumber: 4,
            radius: "55%", //大小
            name: {
                textStyle: {
                    color: '#fff',
                    // backgroundColor: '#999',
                    // borderRadius: 3,
                    // padding: [3, 5]
               },
               margin:0,
            },
            indicator:indicatorData,
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#006B82' ,
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine : {
                show : true,
                lineStyle : {
                    width : 1,
                    color : '#006B82'  // 图表背景网格线的颜色
                }
            },
            splitArea : {
                show : true,    
                areaStyle : {
                    color: ["#1A4861"] // 图表背景网格的颜色
                }
            },
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    lineStyle: {
                        color:"transparent" // 图表中各个图区域的边框线颜色
                    },
                    areaStyle: {
                            color:{ 
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(4,238,254,1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(71,113,236,1)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false},
                            // 'linear-gradient(0deg, 0%,) 100%)'
                        }
                    }
                }
            },
            data : [
                 {
                    value :yradarData,
                    // name : '实际开销（Actual Spending）'
                }
            ]
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
    // 处理前的原始数据
    // console.log(data.mtop.provinceName);
    // console.log(data.mtop.provinceVal);
function mtopAjax(provinceName, provinceVal) {  
     // 处理后的值
    var pinjieData = [];
    var beijingData=''
    for (var i = 0; i < provinceName.length; i++) {
        for (var j = 0; j < provinceVal.length; j++) {
            if (i == j) {
                pinjieData.push(provinceName[i] + '(' + provinceVal[j] + ')')
                if(provinceName[i]=='北京'){
                    beijingData=pinjieData[i]
                }
            }
        }
    }
    var mapBoxEchart = echarts.init(document.getElementById('mtop'));
    var zuobiao = [
        [114.522082, 38.048958],
        [126.657717, 45.773225],
        [117.024967, 36.682785],
        [113.649644, 34.75661],
        [112.550864, 37.890277],
        [111.660351, 40.828319],
        [123.432791, 41.808645],
        [117.282699, 31.866942],
        [125.3222, 43.816],
        [114.3162, 30.581084],
        [108.939, 34.342],
        [117.210813, 39.14393],
        [118.778074, 32.057236],
        [104.0648, 30.57],
        [115.893528, 28.689578],
        [112.979353, 28.213478],
        [103.823305, 36.064226],
        [87.564988, 43.84038],
        [106.709177, 26.629907],
        [116.4551, 40.2539],
        [101.767921, 36.640739],
        [106.55, 29.5647],
        [106.206479, 38.502621],
        [102.714601, 24.882],
        [121.4788, 31.2303],
        [108.297234, 22.806493],
        [110.330802, 20.022071],
        [91.111891, 29.662557],
        [114.15, 22.15],
        [113.14, 23.08]
    ];
    var geoCoordMap = {}
    for (var i = 0; i < pinjieData.length; i++) {
        for (var j = 0; j < zuobiao.length; j++) {
            if (i == j) {
                geoCoordMap[pinjieData[i]] = zuobiao[j]

            }
        }
    }
    // console.log(geoCoordMap);

    // var geoCoordMap = { //可以在地图上显示的城市的坐标信息
    //     '河北省(51027人)': [114.522082, 38.048958],
    //     '黑龙江省(21030人)': [126.657717, 45.773225],
    //     '山东省(15033人)': [117.024967, 36.682785],
    //     '河南省(15008人)': [113.649644, 34.75661],
    //     '山西省(12379人)': [112.550864, 37.890277],
    //     '内蒙古自治区(12107人)': [111.660351, 40.828319],
    //     '辽宁省(9021人)': [123.432791, 41.808645],
    //     '安徽省(6437人)': [117.282699, 31.866942],
    //     '吉林省(5283人)': [125.3222, 43.816],
    //     '湖北省(4398人)': [114.3162, 30.581084],
    //     '陕西省(3717人)': [108.939, 34.342],
    //     '天津市(3660人)': [117.210813, 39.14393],
    //     '江苏省(3246人)': [118.778074, 32.057236],
    //     '四川省(2853人)': [104.0648, 30.57],
    //     '江西省(2733人)': [115.893528, 28.689578],
    //     '湖南省(2694人)': [112.979353, 28.213478],
    //     '甘肃省(2642人)': [103.823305, 36.064226],
    //     '新疆维吾尔自治区(1323人)': [87.564988, 43.84038],
    //     '贵州省(922人)': [106.709177, 26.629907],
    //     '北京(51027人)': [116.4551, 40.2539],
    //     '青海省(852人)': [101.767921, 36.640739],
    //     '重庆市(818人)': [106.55, 29.5647],
    //     '宁夏回族自治区(689人)': [106.206479, 38.502621],
    //     '云南省(672人)': [102.714601, 24.882],
    //     '上海市(543人)': [121.4788, 31.2303],
    //     '广西壮族自治区(483人)': [108.297234, 22.806493],
    //     '海南省(253人)': [110.330802, 20.022071],
    //     '西藏自治区(96人)': [91.111891, 29.662557],
    //     '香港(23人)': [114.15, 22.15],
    //     '广东省(1549人)': [113.14, 23.08],
    // };


    var HFData =[];   
    for(var i=0;i<pinjieData.length;i++){
        var pushArr=[]
        var obj1={};
        obj1.name=pinjieData[i]
        pushArr[0]=obj1;
        pushArr[1]={
            name: beijingData,
            value: 66
        };
        HFData.push(pushArr);
    };
    // console.log(HFData);
     
    
    // var HFData = [ // 数据中name的城市名称必须与geoCoordMap中城市名称一致, 不然关联不上，北京到各地区的线路
    //     [{
    //         name: '广东省(1549人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '新疆维吾尔自治区(1323人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '贵州省(922人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '青海省(852人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '重庆市(818人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '宁夏回族自治区(689人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '云南省(672人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '上海市(543人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '广西壮族自治区(483人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '海南省(253人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '西藏自治区(96人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '香港(23人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '黑龙江省(21030人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '河北省(51027人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '山东省(15033人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '河南省(15008人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '陕西省(3717人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],

    //     [{
    //         name: '内蒙古自治区(12107人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '辽宁省(9021人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '安徽省(6437人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '吉林省(5283人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '湖北省(4398人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '山西省(12379人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '天津市(3660人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '江苏省(3246人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '四川省(2853人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '江西省(2733人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '湖南省(2694人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }],
    //     [{
    //         name: '甘肃省(2642人)'
    //     }, {
    //         name: '北京(51027人)',
    //         value: 66
    //     }]

    // ];
    // console.log(HFData);
    var planePath = 'arrow'; // 箭头的svg
    // push进去线路开始-结束地点-经纬度
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };
    var color = ['#fff', '#FFFFA8', '#46bee9']; //圆圈和字的颜色，线的颜色，箭头颜色
    // 数据
    var series = [];
    // 遍历由合肥到其他城市的线路
    [
        [beijingData, HFData]
    ].forEach(function(item, i) {
        // 配置
        series.push({
            // 系列名称，用于tooltip的显示
            name: item[0],
            type: 'lines',
            zlevel: 1, // 用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
            // effect出发到目的地 的白色尾巴线条
            // 线特效的配置
            effect: {
                show: true,
                period: 6, // 特效动画的时间，单位为 s
                trailLength: 0.1, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
                color: '#46bee9', // 移动箭头颜色
                symbol: planePath,
                symbolSize: 6 // 特效标记的大小
            },
            // lineStyle出发到目的地 的线条颜色
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2 //幅度
                }
            },
            data: convertData(item[1]) //开始到结束数据
        }, {
            //出发地信息
            name: item[0],
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 6
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFFFA8' // 出发
                    }, {
                        offset: 1,
                        color: '#58B3CC ' // 结束 颜色
                    }], false),
                    width: 1.5,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            // 目的地信息
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{b}',
                    fontSize:10
                }
            },
            symbolSize: function(val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function(dataItem) {

                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[1].value])
                };
            })
        });
    });

    // 使用制定的配置项和数据显示图表
    mapBoxEchart.setOption({
        tooltip: {
            HFData: function(params, ticket, callback) {
                    return params.seriesName + '<br />' + params.name + '：' + params.value
                } //数据格式化
        },
        geo: {
            map: 'china',
            roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            aspectScale: 0.75,
            zoom: 1.20,
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#00a0c9',
                    }
                },
                emphasis: { // 对应的鼠标悬浮效果
                    show: false,
                    textStyle: {
                        color: "#00a0c9",
                        fontSize:20,
                    }
                }
            },
            itemStyle: {
                normal: {
                    // areaColor: '#0083ce',
                    areaColor: 'rgba(26,208,245,0.3)',
                    borderColor: '#0066ba'
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#0066ba',
                    areaColor: "#0494e1",
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        series: series
    });
    // echart图表自适应
    window.addEventListener("resize", function() {
        mapBoxEchart.resize();
    });
}
function mbottomAjax(xdata, ydata) {
    var myChart = echarts.init(document.getElementById('mbottom'));
    var option = {
        title: {
            text: '',
            // x: 'center',
            top: '12%',
            left:'6%',
            textStyle: {
                color: '#00F6FF',
                fontWeight: 400,
                fontSize: 13,
            }
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(76,103,235,0.5)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(0,246,255,0.5)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        // color: ['linear-gradient(0deg,rgba(0,246,255,1) 0%,rgba(76,103,235,1) 100%)'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '8%',
            // right: '4%',
            bottom: '13%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: xdata,
            // axisTick: {
            //     alignWithLabel: true
            // },
            //    boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(173,231,255,0.3)'
                },
            },
            axisLabel: {
                show: true, //不显示坐标轴上的文字
                textStyle:{
                    color:'#EBEBEB',
                    fontSize:10,
                }
            },
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(173,231,255,0.3)'
                },
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true, //不显示坐标轴上的文字
                textStyle:{
                    color:'#EBEBEB',
                    fontSize:10,
                }
            },
        }],
        series: [{
            name: '数量',
            type: 'bar',
            barWidth: '60%',
            data: ydata,
            barWidth: 20,
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#fff',
                            fontSize: 10
                        }
                    }
                }
            },
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function rtopAjax1(rtopData1) {
    var myChart = echarts.init(document.getElementById('rtop1'));
    var option = {
        title: {
            // text: '总患者人数比例',
            // subtext: '纯属虚构',
            x: 'center',
            top: '28%',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        //     textStyle: {
        //         color: '#fff',
        //     }
        // },
        // grid: {
        //     left: '0%',
        //     // right: '4%',
        //     bottom: '70%',
        //     containLabel: true
        // },
        series: [{
            name: '数量',
            type: 'pie',
            radius: '55%',
            center: ['60%', '60%'],
            label: {
                normal: {
                    position: 'inner', // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                    // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                    // {a}指series.name  {b}指series.data的name
                    // {c}指series.data的value  {d}%指这一部分占总数的百分比
                    fontSize: 8,
                    formatter:function(e){
                        　　　　 var newStr=" ";
                                var start,end;
                         　　　　var name_len=e.name.length;    　　　　　　　　　　　　   //每个内容名称的长度
                         　　　　var max_name=4;    　　　　　　　　　　　　　　　　　　//每行最多显示的字数
                         　　　　var new_row = Math.ceil(name_len / max_name); 　　　　// 最多能显示几行，向上取整比如2.1就是3行
                         　　　　if(name_len>max_name){ 　　　　　　　　　　　　　　  //如果长度大于每行最多显示的字数
                          　　　　　　for(var i=0;i<new_row;i++){ 　　　　　　　　　　　   //循环次数就是行数
                           　　　　　　　　var old='';    　　　　　　　　　　　　　　　　    //每次截取的字符
                           　　　　　　　　start=i*max_name;    　　　　　　　　　　     //截取的起点
                          　　　　　　　　 end=start+max_name;    　　　　　　　　　  //截取的终点
                           　　　　　　　　if(i==new_row-1){    　　　　　　　　　　　　   //最后一行就不换行了
                            　　　　　　　　　　old=e.name.substring(start);
                           　　　　　　　　}else{
                            　　　　　　　　　　old=e.name.substring(start,end)+"\n";    
                          　　　　　　　　 }
                           　　　　　　　　　　 newStr+=old; //拼接字符串
                         　　　　　　  }
                        　　　   }else{                                          //如果小于每行最多显示的字数就返回原来的字符串
                          　　　　　　newStr=e.name; 
                         　　　  }
                         　　　 return newStr; 
                        }
                },
            },
            color: ['#FF549D', '#3C86EF', '#00CFD7' ],
            data: rtopData1,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function rtopAjax2(rtopData2) {
    var myChart = echarts.init(document.getElementById('rtop2'));
    var option = {
        title: {
            // text: '总就诊量比例',
            // subtext: '纯属虚构',
            x: 'center',
            top: '28%',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        //     textStyle: {
        //         color: '#fff',
        //     }
        // },
        series: [{
            name: '数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            label: {
                normal: {
                    position: 'inner', // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                    // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                    // {a}指series.name  {b}指series.data的name
                    // {c}指series.data的value  {d}%指这一部分占总数的百分比
                    fontSize: 8,
                    formatter:function(e){
                        　　　　 var newStr=" ";
                                var start,end;
                         　　　　var name_len=e.name.length;    　　　　　　　　　　　　   //每个内容名称的长度
                         　　　　var max_name=4;    　　　　　　　　　　　　　　　　　　//每行最多显示的字数
                         　　　　var new_row = Math.ceil(name_len / max_name); 　　　　// 最多能显示几行，向上取整比如2.1就是3行
                         　　　　if(name_len>max_name){ 　　　　　　　　　　　　　　  //如果长度大于每行最多显示的字数
                          　　　　　　for(var i=0;i<new_row;i++){ 　　　　　　　　　　　   //循环次数就是行数
                           　　　　　　　　var old='';    　　　　　　　　　　　　　　　　    //每次截取的字符
                           　　　　　　　　start=i*max_name;    　　　　　　　　　　     //截取的起点
                          　　　　　　　　 end=start+max_name;    　　　　　　　　　  //截取的终点
                           　　　　　　　　if(i==new_row-1){    　　　　　　　　　　　　   //最后一行就不换行了
                            　　　　　　　　　　old=e.name.substring(start);
                           　　　　　　　　}else{
                            　　　　　　　　　　old=e.name.substring(start,end)+"\n";    
                          　　　　　　　　 }
                           　　　　　　　　　　 newStr+=old; //拼接字符串
                         　　　　　　  }
                        　　　   }else{                                          //如果小于每行最多显示的字数就返回原来的字符串
                          　　　　　　newStr=e.name; 
                         　　　  }
                         　　　 return newStr; 
                        }
                },
            },
            color:  ['#FF549D', '#3C86EF', '#00CFD7' ],
            data: rtopData2,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function rtopAjax3(rtopData3) {
    var myChart = echarts.init(document.getElementById('rtop3'));
    var option = {
        title: {
            // text: '总记录数比例',
            // subtext: '纯属虚构',
            x: 'center',
            top: '28%',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     orient: 'vertical',
        //     left: 'left',
        //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        //     textStyle: {
        //         color: '#fff',
        //     }
        // },
        series: [{
            name: '数量',
            type: 'pie',
            radius: '55%',
            center: ['40%', '60%'],
            label: {
                normal: {
                    position: 'inner', // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                    // formatter: '{a} {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                    // {a}指series.name  {b}指series.data的name
                    // {c}指series.data的value  {d}%指这一部分占总数的百分比
                    fontSize: 8,
                    formatter:function(e){
                        　　　　 var newStr=" ";
                                var start,end;
                         　　　　var name_len=e.name.length;    　　　　　　　　　　　　   //每个内容名称的长度
                         　　　　var max_name=4;    　　　　　　　　　　　　　　　　　　//每行最多显示的字数
                         　　　　var new_row = Math.ceil(name_len / max_name); 　　　　// 最多能显示几行，向上取整比如2.1就是3行
                         　　　　if(name_len>max_name){ 　　　　　　　　　　　　　　  //如果长度大于每行最多显示的字数
                          　　　　　　for(var i=0;i<new_row;i++){ 　　　　　　　　　　　   //循环次数就是行数
                           　　　　　　　　var old='';    　　　　　　　　　　　　　　　　    //每次截取的字符
                           　　　　　　　　start=i*max_name;    　　　　　　　　　　     //截取的起点
                          　　　　　　　　 end=start+max_name;    　　　　　　　　　  //截取的终点
                           　　　　　　　　if(i==new_row-1){    　　　　　　　　　　　　   //最后一行就不换行了
                            　　　　　　　　　　old=e.name.substring(start);
                           　　　　　　　　}else{
                            　　　　　　　　　　old=e.name.substring(start,end)+"\n";    
                          　　　　　　　　 }
                           　　　　　　　　　　 newStr+=old; //拼接字符串
                         　　　　　　  }
                        　　　   }else{                                          //如果小于每行最多显示的字数就返回原来的字符串
                          　　　　　　newStr=e.name; 
                         　　　  }
                         　　　 return newStr; 
                        }
                },
            },
            color: ['#FF549D', '#3C86EF', '#00CFD7' ],
            data: rtopData3,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function rmiddleAjax(xdata, ydata) {
    var myChart = echarts.init(document.getElementById('rmiddle'));
    var option = {
        title: {
            text: '',
            x: 'left',
            top: '12%',
            left:'8%',
            textStyle: {
                color: '#fff',
                fontWeight: 400,
                fontSize: 14
            }

        },
        tooltip: {
            trigger: 'axis'
        },
        color:['#FF549D','#3C86EF','#00F6FF'],
        legend: {
            orient: 'vertical',
            data: ['北京安定医院','河北医院','天津医院'],
            textStyle: {
                color: '#fff',
                fontSize:10,
            },
            left:'6%',
            top:'23%',
            icon: 'circle',
            itemWidth: 8,  // 设置宽度
            itemHeight: 8, // 设置高度
        },
        grid: {
            left: '30%',
            // right: '20%',
            bottom: '12%',
            top:'28%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: xdata,
            axisLine: {
                lineStyle: {
                    color: 'rgba(173,231,255,0.3)'
                },
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true, //不显示坐标轴上的文字
                textStyle:{
                    color:'#EBEBEB',
                    fontSize:10,
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(173,231,255,0.3)'
                },
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                show: true, //不显示坐标轴上的文字
                textStyle:{
                    color:'#EBEBEB',
                    fontSize:10,
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [
            {
                name: '北京安定医院',
                type: 'line',
                stack: '总量',
                data: ydata[0],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle:{
                                color: '#fff',
                                fontSize:10,
                            }
                        },
                        lineStyle:{ 
                            color:'#FF549D'  //改变折线颜色
                        } 
                    },

                },
            }, {
                name: '河北医院',
                type: 'line',
                stack: '总量',
                data: ydata[1],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle:{
                                color: '#fff',
                                fontSize:10,
                            }
                        },
                        lineStyle:{ 
                            color:'#3C86EF'//改变折线颜色
                        } 
                    },
                },
            }, {
                name: '天津医院',
                type: 'line',
                stack: '总量',
                data: ydata[2],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle:{
                                color: '#fff',
                                fontSize:10,
                            }
                        },
                        lineStyle:{ 
                            color:'#00F6FF' //改变折线颜色
                        }
                    }
                },
            }
        ]
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
function rbottomAjax(rbottomData) {
    for(var i=0;i<rbottomData.length;i++){
        rbottomData[i].unit='%';
        if(i==0){
            rbottomData[i].pos=['20%', '55%'];
        }else if(i==1){
            rbottomData[i].pos= ['50%', '55%'];
        }else if(i==2){
            rbottomData[i].pos=['80%', '55%'];
        }
    };
    var myChart = echarts.init(document.getElementById('rbottom'));
    var highlight = '#0089A6'; 
    var option = {
        series: (function() {
            var result = [];
            rbottomData.forEach(function(item) {
                result.push(
                    // 外围刻度
                    {
                        type: 'gauge',
                        center: item.pos,
                        radius: '50%',  // 1行3个
                        splitNumber: item.splitNum || 10,
                        min: 0,
                        max: 100,
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                shadowBlur: 0,
                                color: [
                                    [1, highlight]
                                ]
                            }
                        },
                        axisTick: {
                            show: true,
                            lineStyle: {
                                color: highlight,
                                width: 1
                            },
                            length: -5,
                            splitNumber: 10
                        },
                        splitLine: {
                            show: true,
                            length: -5,
                            lineStyle: {
                                color: '#00F6FF',
                            }
                        },
                        axisLabel: {
                            distance: 10,
                            textStyle: {
                                color: highlight,
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        },
                        pointer: {
                            show: 0
                        },
                        detail: {
                            show: 0
                        }
                    },
                    
                    // 内侧指针、数值显示
                    {
                        name: item.name,
                        type: 'gauge',
                        center: item.pos,
                        radius: '30%',
                        startAngle: 225,
                        endAngle: -45,
                        min: 0,
                        max: 100,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 6,
                                color: [
                                    [1, 'rgba(255,255,255,.1)']
                                ]
                            }
                        },
                        axisTick: {
                            show: 0,
                        },
                        splitLine: {
                            show: 0,
                        },
                        axisLabel: {
                            show: 0
                        },
                        pointer: {
                            show: true,
                            length: '105%',
                            width:4,
                        },
                        detail: {
                            show: true,
                            offsetCenter: [0, '140%'],
                            textStyle: {
                                fontSize: 12,
                                color: '#fff'
                            },
                            formatter: [
                                '{value} ' + (item.unit || ''),
                                '{name|' + item.name + '}'
                            ].join('\n'),
                            rich: {
                                name: {
                                    fontSize: 12,
                                    // lineHeight: 50,
                                    color: '#ddd'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: highlight,
                            }
                        },
                        data: [{
                            value: item.value
                        }]
                    }
                );
            });
            
            return result;
        })()
    };
    myChart.setOption(option);
            // echart图表自适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
}
