<template>
  <div class="page">
    <h1>git常用操作</h1>
    <pre v-highlightjs>
      <code class="javascript hljs">
* 在githubg官网创建一个新的仓库
* 下载git工具
* 安装
* 第一次使用时, 需要在控制台输入
* git config --global user.name "one"
* git config --global user.email "123456@qq.com"
*
* 获取秘钥
* ssh-keygen -t rsa -C "123456@qq.com"
* 然后连续回车3次
* 查找秘钥
* 在C:\Users\Administrator\.ssh\id_rsa.pub（将文件丢入vscode或者其他编码器中即可复制） 中获取秘钥，ctrl+A复制全部
* 然后在github中的setting中的  “SSH and GPG keys”  中添加秘钥
*
* 到github官网的setting中去添加秘钥
*
* 克隆项目到本地
* `git clone 项目地址`
*
* 每一个仓库有一个.git文件夹（不要去触碰）
*
* 上传代码
* git add . (添加所有修改的文件)
* git commit -m '' 对这一次提交的描述（添加纪录）
* git push origin master 把代码上传到主分支
*
* 切记:
* 完成一个小功能就add, commit, push, pull
*
* 拉取最新代码
* 每一次书写代码之前，都要先pull一下每一次push代码之前也要先pull一下
* git pull origin master
*
* 多人不能同时修改一个文件
*
*
*
* git status
* 查看工作树的状态
*
* 打开github网站,查看是否更新成功
*
*
*
* 添加合作者
* 在项目的setting中Collaborators栏中添加


* git branch 查看本地所有分支

* git branch -r 查看所有远程分支

* git branch -a 查看本地和远程所有分支

* git branch -f branchname 新建一个分支但不切换，仍在原分支上继续操作（branchname为分支名）

* git checkout branchname 切换分支

* git checkout -b branchname 新建并切换至新分支

* git branch -d branchname 删除本地分支，将-d改为-D表示强制删除，相当于 --delete --force

* git branch -d -r branchname 删除远程分支，删除后，还要推送到服务器上才行，即 git push origin:branchname

* git branch -m oldname newname 重命名分支,-M表示强制重命名

* git log 显示提交日志，所有提交过的版本信息，看不出来被删除的commitid

* git reflog  可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）

* git reset --hard HEAD~1 退回到上一个版本

* git reset --hard 目标版本号 退回到目标版本号

* 版本回退中^默认被当做是换行符所以：
* git reset --hard HEAD^^ === git reset --hard "HEAD^" === git reset --hard HEAD~(~表示回退几次默认是1)

*  分支合并

* git push origin master 把代码上传到主分支

* （现处于开发分支）将主分支代码拉取合并：git merge master(主分支)。

* 将开发中的分支（dev），合并到稳定分支（master），
* 还可以：首先切换的master分支：git checkout master(主分支)。
* 然后执行合并操作：git merge dev(开发分支)。
* 如果有冲突，会提示你，调用git status查看冲突文件。
* 解决冲突，然后调用git add或git rm将解决后的文件暂存。
* 所有冲突解决后，git commit 提交更改。

* 例如：将abd352f提交合并到当前分支
* git merge abd352f
      </code>
    </pre>
    <main>
      <img
        src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/20200331162924269.png"
        alt=""
      />
      <p>
        第一次建立分支进行push的时候可能遇到的问题 使用 git push origin
      </p>
      <p>你的分支名 -u</p>
      <img
        src="https://muxin-1258803575.cos.ap-guangzhou.myqcloud.com/20200420161414190.png"
        alt=""
      />
      <p>查看当前分支对应远程哪个分支</p>
    </main>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
// @ is an alias to /src
export default {
  name: "page0",
  components: {},
  setup() {
    const state = reactive({});
    // 挂载
    onMounted(() => {});
    return { state };
  }
};
</script>
<style lang="less" scoped>
// .page {
//   img {
//     margin-left: 150px;
//   }
// }
</style>
