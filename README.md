## [MÓSSO](http://www.mossomusic.ml/)


&nbsp;
<img src="https://github.com/JustinZelus/MOSSO_materials/blob/master/architecture.png"/>

> FRONTEND
>
> > React + Redux(Ongoing) + Bootstrap 4 + SASS
> >
> > > react v16 + rounter v4 + react-redux v6(Ongoing)

> BACKEND
>
> > NodeJS + Express + RESTful + MongoDB

> SERVER
>
> > AWS: EC2-Linux , S3  , EBS , Route 53

> BUILD TOOLS
>
> > Webpack 4

> ISOMORPHIC
>
> > SSR

> TOOLS
>
> > chrome , redux-devtools-extension ,webpack-dev-server
---
---

### [Q & A - Encountered Problems During Development](https://github.com/JustinZelus/website-dev-problems)

---
---
## Server Side Rendering ChangeLog

| Date       | Author | Ver   | Description                                                                                                                                 |
| ---------- | -----: | ----- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 2019/01/18 |     JZ | 1.0.9 | Add JQuery (Home page).<br>Update images,content.                                                                                           |
| 2019/01/17 |     JZ | 1.0.8 | Update tile ,icon.                                                                                                                          |
| 2019/01/17 |     JZ | 1.0.7 | Refactor Ticket component.<br>Add 'Babel transform-runtime' for reduce the size of file.<br>Fixed error bug on click MÓSSO.                 |
| 2019/01/17 |     JZ | 1.0.6 | Add link on fb icon (Home).<br>Add componentWillReceiveProps() in Jumbotron component.<br>Update detail collection on DB.<br>Update images. |
| 2018/12/24 |     JZ | 1.0.5 | Fixed port.<br>Add sourceMapSupport.                                                                                                        |
| 2018/12/24 |     JZ | 1.0.4 | Add href of Home on Header.                                                                                                                 |
| 2018/12/22 |     JZ | 1.0.3 | Bug Fixed - refresh can't load index.html.                                                                                                  |
| 2018/12/20 |     JZ | 1.0.2 | routeEntry : change import index.html path.<br>Webpack : change HtmlWebPackPlugin & MiniCssExtractPlugin's file name.                       |
| 2018/12/20 |     JZ | 1.0.1 | Change architecture to Sever Side Rendering.<br>Build Production Version && Run Successfully.                                               |

---
---


## Front-end ChangeLog

| Date       | Author | Ver   | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | -----: | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2018/12/27 |     JZ | 1.4.1 | Refactor to react-redux.                                                                                                                                                                                                                                                                                                                                                          |
| 2018/12/10 |     JZ | 1.4.0 | Solved - 404 not found when refresh in dev-environment(webpack-dev-server).                                                                                                                                                                                                                                                                                                       |
| 2018/11/27 |     JZ | 1.3.9 | Change detail page path and add name param that make Jumbotron can get image's url by pathname' params.                                                                                                                                                                                                                                                                           |
| 2018/11/27 |     JZ | 1.3.8 | Fixed Jumbotron component.<br>JQuery issue still exist , need to remove JQuery in the future.                                                                                                                                                                                                                                                                                     |
| 2018/11/23 |     JZ | 1.3.7 | Use JQuery to animate Ticket component,but ithis way is not recommended by official docs.                                                                                                                                                                                                                                                                                         |  |
| 2018/11/21 |     JZ | 1.3.6 | Jumbotron add state..<br> Update jumbotron image.                                                                                                                                                                                                                                                                                                                                 |  |
| 2018/11/21 |     JZ | 1.3.5 | Update js's library.<br> Update sass library.                                                                                                                                                                                                                                                                                                                                     |  |
| 2018/11/21 |     JZ | 1.3.4 | Menu bar title redefine.<br>ImagePost page api test.                                                                                                                                                                                                                                                                                                                              |  |
| 2018/11/20 |     JZ | 1.3.3 | Redecoration 'Ticket' page. <br>`Bug fixed` - accordion doesn't collapse by default.                                                                                                                                                                                                                                                                                              |  |
| 2018/11/20 |     JZ | 1.3.2 | Redecoration 'ImagePost' page - part 2.<br><span style="color:Fuchsia ">Add SCSS - hyperlink , image.</span>                                                                                                                                                                                                                                                                      |  |
| 2018/11/19 |     JZ | 1.3.1 | Redecoration 'ImagePost' page - part 1.<br><span style="color:Fuchsia ">Add SCSS - blockquote , blog , breadcrumb ,clients , utilities</span>                                                                                                                                                                                                                                     |  |
| 2018/11/17 |     JZ | 1.3.0 | Add jarallax libs. (Smooth parallax scrolling effect for background images, videos and inline elements.)                                                                                                                                                                                                                                                                          |  |
| 2018/11/14 |     JZ | 1.2.9 | <span style="color:LightSlateGray  ">Add Header (navbar)</span>.<br><span style="color:Fuchsia ">Add SCSS - base , header , nav , custom</span><br>Update Navbar Menu functions.                                                                                                                                                                                                  |  |
| 2018/11/14 |     JZ | 1.2.8 | 'Detail' page rename - ImagePost. <br>Redecoration 'ImagePost' page's footer.                                                                                                                                                                                                                                                                                                     |  |
| 2018/11/14 |     JZ | 1.2.8 | <span style="color:LightSlateGray  ">Ticket page add footer.</span><br><span style="color:Fuchsia ">Add SCSS - footer , mylist , section ,typography , utilities</span>                                                                                                                                                                                                           |  |
| 2018/11/14 |     JZ | 1.2.7 | **Fixde the relative path & absolute path problem.** ( Fetch by default will access a relative path to where you are using it. You can specify you want to bypass the relative path by starting your url with /.)<br> **Use Hashrouter instead of Browserrouter to solve the refresh problem.** ( Failed to load resource: the server responded with a status of 404 (Not Found)) |  |
| 2018/11/13 |     JZ | 1.2.6 | Redefine Route.App->Header & Main -> Home -> Section & Articles & Service -> Detail.                                                                                                                                                                                                                                                                                              |  |
| 2018/11/12 |     JZ | 1.2.5 | `Bug fixed` - accordion can collapse with dynamic height know.                                                                                                                                                                                                                                                                                                                    |  |
| 2018/11/12 |     JZ | 1.2.4 | <span style="color:LightSlateGray  ">Add Ticket page.</span><br><span style="color:Fuchsia ">Add SCSS - variable,mixins,accordions</span><br>Add bootstrap.min.js in script. <br>Add accordion animate in function.js.                                                                                                                                                            |  |
| 2018/11/11 |     JZ | 1.2.3 | \<Link> add state's params for pass to next route.<br><span style="color:Aqua ">Connect backend api</span> - Detail component.                                                                                                                                                                                                                                                    |  |
| 2018/11/11 |     JZ | 1.2.2 | Update detail page's image.<br>Detail component add api.<br><span style="color:Fuchsia ">Add SCSS - style</span>                                                                                                                                                                                                                                                                  |  |
| 2018/11/11 |     JZ | 1.2.1 | `Bug fixed` - Warning: validateDOMNesting(...) : \<a> cannot appear as a descendant of \<a>. <br> `Bug fixed` - Uncaught TypeError: Cannot read property 'charAt' of undefined.                                                                                                                                                                                                   |
| 2018/11/10 |     JZ | 1.2.0 | Add the relevant kit of bootstrap v4.1.3.<br>Webpack add publicPath for some url and cloud server.<br>Redecoration 'Detail' page.<br>Add ScrollToTopRoute.<br>Use ScrollToTopRoute instead of Route. It can scroll to top on every transition.                                                                                                                                    |
| 2018/11/09 |     JZ | 1.1.9 | Add Detail page's images.<br>Fixed router can't back to previous problem.<br>Add Autoprefixer module to parse some css problem.                                                                                                                                                                                                                                                   |
| 2018/11/06 |     JZ | 1.1.8 | Add Detail page.<br>Add Router,Switch.<br>Add historyApiFallback in webpack-dev-server.                                                                                                                                                                                                                                                                                           |
| 2018/10/22 |     JZ | 1.1.7 | Add Comment component.                                                                                                                                                                                                                                                                                                                                                            |
| 2018/10/21 |     JZ | 1.1.6 | `Bug fixed` - service rendering.<br>Use map to render same component.                                                                                                                                                                                                                                                                                                             |
| 2018/10/19 |     JZ | 1.1.5 | Add Article component.<br>Components Recoding.                                                                                                                                                                                                                                                                                                                                    |
| 2018/10/19 |     JZ | 1.1.4 | Add CopyWebpackPlugin for production mode.<br>Add picture to test.                                                                                                                                                                                                                                                                                                                |
| 2018/10/15 |     JZ | 1.1.3 | 新增 Section 組件讀取後端 api 功能&測試.<br>新增 Section 所需圖片。                                                                                                                                                                                                                                                                                                               |
| 2018/10/15 |     JZ | 1.1.2 | 修改 webpack.config,暫時刪除沒用到的 plugin.<br> Home Route 加上 exact.<br>新增 UglifyJsPlugin.<br>新增 Home 頁所需圖片&文字<br>刪除沒用到的 css file.                                                                                                                                                                                                                            |
| 2018/10/12 |     JZ | 1.1.1 | 新增 SectionBig 元件.<br> 新增進入首頁後，讀取後端 api,並 render SectionBig , Section 元件的功能.                                                                                                                                                                                                                                                                                 |
| 2018/10/11 |     JZ | 1.1.0 | Add React-Router.                                                                                                                                                                                                                                                                                                                                                                 |
| 2018/10/9  |     JZ | 1.0.9 | Add Button Component.                                                                                                                                                                                                                                                                                                                                                             |
| 2018/10/8  |     JZ | 1.0.8 | Add html5 template in index.js and started to translate syntax into jsx.<br>Add Footer Component.<br> Add Section Component.                                                                                                                                                                                                                                                      |
| 2018/10/6  |     JZ | 1.0.7 | Add clean-webpack-plugin for clear specific folder when building project.<br>Change webpack.config : contentBase: \_\_dirname + "/public/"                                                                                                                                                                                                                                        |
| 2018/10/6  |     JZ | 1.0.6 | Add assets to dist folder.<br>Add file-loader.                                                                                                                                                                                                                                                                                                                                    |
| 2018/10/5  |     JZ | 1.0.4 | Configure dev port : 3000,proxy port : 8080                                                                                                                                                                                                                                                                                                                                       |
| 2018/10/3  |     JZ | 1.0.3 | Add public folder for assets,images file.                                                                                                                                                                                                                                                                                                                                         |
| 2018/10/3  |     JZ | 1.0.2 | Add source maps for those bundle's source file. <br> Add webpack-dev-server for development more conveniently.                                                                                                                                                                                                                                                                    |
| 2018/10/2  |     JZ | 1.0.1 | Add react, webpack.config.js , build command.<br>Test react component , .css , .jpg file in bundle.<br>Now Bundling will automatically add "script" tag in index.html.                                                                                                                                                                                                            |
---
---
## Back-end ChangeLog

| Date       | Author | Ver   | Description                                                                                                                                                                                                                                          |
| ---------- | -----: | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2018/12/08 |     JZ | 1.1.2 | Redefine package.json .                                                                                                                                                                                                                              |
| 2018/12/03 |     JZ | 1.1.0 | Deploy test.                                                                                                                                                                                                                                         |
| 2018/11/28 |     JZ | 1.0.9 | Detail route add a parameter.                                                                                                                                                                                                                        |
| 2018/11/11 |     JZ | 1.0.8 | <span style="color:Aqua">Add detail api</span> - GET All data.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GET Single data by Id. |
| 2018/11/11 |     JZ | 1.0.7 | Add detail model & detail collection & detail router.                                                                                                                                                                                                |
| 2018/10/21 |     JZ | 1.0.6 | Update section model & section collection. <br> `Bug fixed` - Rename picture file for 404 error.                                                                                                                                                     |
| 2018/10/19 |     JZ | 1.0.5 | Add service model.<br>Route-home import service model.                                                                                                                                                                                               |
| 2018/10/19 |     JZ | 1.0.4 | Home's-page-api now use Promise All to get data.                                                                                                                                                                                                     |
| 2018/10/16 |     JZ | 1.0.3 | Test Promise while query single collection.<br> Use Async parallel while query multiple colletions.                                                                                                                                                  |
|            |
| 2018/10/15 |     JZ | 1.0.2 | Add sectionModel for MongoDB.<br>Add mongoose and connect to localhost DB.<br>Delete useless file.                                                                                                                                                   |
| 2018/10/12 |     JZ | 1.0.1 | 新增 home route.                                                                                                                                                                                                                                     |
| 2018/10/11 |     JZ | 1.0.0 | Add mongodb.<br>Add schema model.                                                                                                                                                                                                                    |

