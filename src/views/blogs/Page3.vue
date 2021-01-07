<template>
  <div class="page">
    <h1>TS接口初步理解</h1>
    <h2>接口</h2>
    <p>说明：接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约</p>
    <p>也就是定义 1：确定属性、2：可选属性、3：任意属性:4：只读属性</p>
    <pre v-highlightjs>
      <code class="typeScript hljs">
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
    </code></pre>
    <p>
      这是一个printLabel函数，它需要一个含有label参数的对象并且label的值为string类型；
    </p>
    <p>如果myObj中的label数据类型不为string，则会报错，此为“定义契约”</p>
    <br />
    <p>接下来改为用接口（interface）来实现就是</p>
    <pre v-highlightjs>
      <code class="typeScript hljs">
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
    </code></pre>
    <p>这里接口LabelledValue定义了一个属性为label且类型为string</p>
    <p>
      printLabel函数中，labelledObj直接使用接口就相当于规定了labelledObj的参数的类型
    </p>
    <p>
      传入的对象满足上面接口中提到的必要条件，它就是被允许的，也就是类型检查器不会去检查属性的顺序，只要<b>相应的属性存在并且类型也是对的</b>就可以
    </p>
    <h2>可选属性</h2>
    <p>
      接口里的属性<b>不全都是</b>必需的，意思就是该参数不存在也不会报错，但是如果有该参数且类型不对，还是一样会报错的
    </p>
    <p>
      可选属性的<b>好处</b>之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
    </p>
    <pre v-highlightjs><code class="typeScript hljs">
interface LabelledValue {
  label: string;
  sex?: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

    </code></pre>
    <p>
      可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个‘?’符号
    </p>
    <h2>只读属性</h2>
    <p>
      一些对象属性只能在对象<b>刚刚创建</b>的时候修改其值。 你可以在属性名前用
      <b>readonly</b>来指定只读属性:
    </p>
    <pre v-highlightjs><code class="typeScript hljs">
interface LabelledValue {
  label: string;
  sex?: string,
  readonly id: number;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { 
	size: 10, 
	label: "Size 10 Object",
	id:1 
};
printLabel(myObj);

      </code></pre>
    <p>
      只读属性也是确定属性，在对象变量<b>定义的时候必须有值，此后不能修改</b>
    </p>
    <h2>额外的属性检查</h2>
    <pre v-highlightjs><code class="typeScript hljs">
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
}
let mySquare = createSquare({ colour: "red", width: 100 });

      </code></pre>
    <p>
      如上，若以<b>字面量</b>的形式作为参数去传递的话，createSquare函数的参数中，故意拼错为colour，是会报错的
    </p>
    <pre v-highlightjs><code class="typeScript hljs">
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig) {
  // ...
}
let mySquare = { colour: "red", width: 100 }
createSquare(mySquare);

        </code></pre>
    <p>而将对象作为<b>变量的形式</b>传递进去则不会报错，如上</p>
    <p>
      对象字面量会被特殊对待而且会经过<b>额外属性检查</b>，当将它们赋值给变量或作为参数传递的时候。
      如果一个<b>对象字面量</b>存在任何“目标类型”<b>不</b>包含的属性时，你会得到一个<b>错误</b>。
    </p>
    <p>如果非要以字面量的形式来编写，绕开这些检查非常简单</p>
    <p>
      1：最简便的方法是使用<a
        style="color:#E05D5D"
        target="_blank"
        href="https://ts.xcatliu.com/basics/type-assertion.html"
        >类型断言</a
      >：as
    </p>
    <pre v-highlightjs><code class="typeScript hljs">
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig) {
  // ...
}
// let mySquare = createSquare({ colour: "red", width: 100 });
let mySquare = createSquare({ width: 100, colour: "red" } as SquareConfig);
      </code></pre>
    <p>
      2：最佳的方式是能够添加一个字符串索引签名（[propName: string]:
      any;），前提是你能够确定这个对象可能具有某些做为特殊用途使用的<b
        >额外属性</b
      >
      也叫<b>任意属性</b>
    </p>
    <pre v-highlightjs><code class="typeScript hljs">
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
//SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么
function createSquare(config: SquareConfig) {
  // ...
}
let mySquare = createSquare({ colour: "red", width: 100 });

       </code></pre>
    <p>
      <b>注意</b
      >：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是任意属性类型的子类；
      定义了任意属性后，对象变量中的属性个数才可以出现比接口的属性数量多的情况
    </p>
    <h2>函数类型接口</h2>
    <p>对方法传入的参数以及返回值进行约束</p>
    <p>
      为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
      它就像是一个只有<b>参数列表和返回值类型</b>的函数定义。参数列表里的<b>每个参数</b>都需要名字和类型。
    </p>
    <pre v-highlightjs><code class="typeScript hljs">
interface Func {
  (param1: string, param2: number): boolean;
}
let myFunc: Func = function(param1, param2){
  return typeof param1 === "string" && typeof param2 === "number";
};
myFunc("123", 321);

       </code></pre>
    <p>
      如上代码，其中接口内的括号内是函数的参数，对参数的类型进行了规定，冒号（:）后面是函数的返回值，接口对其返回值类型进行了规定
    </p>
    <h2>可索引的类型接口</h2>
    <p>作用是可对数组或对象进行约束</p>
    <pre v-highlightjs><code class="typeScript hljs">
interface ArrIndex {
    [index:number]: string
}
interface Obj {
    [index:string]:string
}
let myArr: ArrIndex = ['first','second'] // 元素值必须是string类型，索引必须是数字类型
let myObj:Obj = {
    name: 'kkkk' // key必须是string类型，值也必须是string类型
}
       </code></pre>
    <p>不按规则来可是会报错的哦</p>
    <pre v-highlightjs><code class="typeScript hljs">
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[0] = "Mallory"; // error!

      </code></pre>
    <p>如上，可以将索引签名设置为只读，这样就防止了给索引赋值</p>
    <h2>类接口</h2>
    <p>对类进行约束，和抽象类有点相似</p>
    <p>可以类实现接口implements</p>
    <p>接口继承接口</p>
    <p>接口继承类</p>
    <main></main>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "Page3",
  components: {},
  setup() {
    const state = reactive({});
    onMounted(() => {});
    return { state };
  }
};
</script>
<style lang="less" scoped></style>
