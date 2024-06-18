import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
export default class TagCloud extends Component {
constructor(props) {
super(props);
let rotateAngleXbase = 50;
let rotateAngleYbase = 50;
this.state = {
optionData: ["房价放假","通缉犯",'反季节','卡夫卡','可课哦','解放军'
,"通缉犯",'反季节','卡夫卡','可课哦','解放军',"通缉犯",'反季节','卡夫卡','可课哦','解放军'
], //this.props.TagCloudData,
timer: null,
setting: {
radius: 500,
maxFont: 100,
color: true, //设置标签颜色，设置为true为随机颜色，也可以设置其他色值
// rotateAngleXbase: 150,//默认旋转速度基数，数越小速度越快
// rotateAngleYbase: 150,
hover: true,//是否开启悬浮联动
},
rotateAngleX:Math.PI / rotateAngleXbase, //默认旋转速度基数，数越小速度越快
rotateAngleY:Math.PI / rotateAngleYbase, //默认旋转速度基数，数越小速度越快
}
}
 

//绕y轴旋转的函数
rotateY(tag){
const {rotateAngleY} = this.state;
let cos = Math.cos(rotateAngleY);
let sin = Math.sin(rotateAngleY);
let x1 = tag.z * sin + tag.x * cos;
let z1 = tag.z * cos - tag.x * sin;
tag.x = x1;
tag.z = z1;
}
 

//绕x轴旋转的函数
rotateX(tag){
const {rotateAngleX} = this.state;
let cos = Math.cos(rotateAngleX);
let sin = Math.sin(rotateAngleX);
let y1 = tag.y * cos - tag.z * sin;
let z1 = tag.y * sin + tag.z * cos;
tag.y = y1;
tag.z = z1;
}
 

//设置每个标签的坐标位置和字体大小以及透明度
setPosition(tag, r, maxFont){
let tagContainer = document.getElementById('tag');
tag.ele.style.transform = `translate( ${(tag.x + tagContainer.offsetWidth / 2 - tag.ele.offsetWidth / 2)/320}rem,
${(tag.y + tagContainer.offsetHeight / 2 - tag.ele.offsetHeight / 2)/320}rem)`;
tag.ele.style.opacity = tag.z / r / 2 + 0.7;
tag.ele.style.fontSize = (tag.z / r / 2 + 0.5) * maxFont + "px";
// console.log(tag.ele.style.fontSize,"tag.ele.style.fontSize")
}
innit(){
const setting = this.state.setting;
let tagContainer = document.getElementById('tag');
let tags = [];
let optionData = this.state.optionData;
if(Array.isArray(optionData) && optionData.length>0){
for (let i = 0; i<optionData.length; i++) {
let tag = document.createElement("a");
tag.innerText = optionData[i];
tag.setAttribute("class", "tag");
tag.style.cssText += "position: absolute; left: 0; top: 0; text-decoration: none; font-weight: bolder;";
tagContainer.appendChild(tag);
tags.push(tag);
};
// tagContainer.appendChild(tagGroup);
//让标签元素相对标签云元素绝对定位
tagContainer.style.position = "relative";
}
let allTag = [];//标签数组
for (let i = 0, length = tags.length; i < length; i++) {
if (setting.color === true) {
tags[i].style.color = "#2493FC";
} else {
tags[i].style.color = setting.color;
}
// 获取球面上均匀的点的经纬度
let angleX = Math.acos((2 * (i + 1) - 1) / length - 1);
let angleY = angleX * Math.sqrt(length * Math.PI);
//根据经纬度获取点的坐标，球中心的点坐标是 
let x = setting.radius * Math.sin(angleX) * Math.cos(angleY);
let y = setting.radius * Math.sin(angleX) * Math.sin(angleY);
let z = setting.radius * Math.cos(angleX);
// console.log(x,y,z,"我哦")
//每个标签对象都有四对值
let tag = {
x: x,
y: y,
z: z,
ele: tags[i]
};
allTag.push(tag);
}
// console.log(allTag,"我哦")
//开始转动的函数;
this.timer = setInterval(() => {
for (let i = 0; i < tags.length; i++) {
this.rotateX(allTag[i]);
this.rotateY(allTag[i]);
this.setPosition(allTag[i], setting.radius, setting.maxFont);
}
}, 100);
 
}
componentDidMount(){
this.innit();
}
 

componentWillUnmount() {
this.timer && clearInterval(this.timer);
}
render() {
return (
<div id="tag" style={{margin:`${800/320}rem auto`}}></div>
)
}
}