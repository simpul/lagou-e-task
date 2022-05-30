# edu-boss-boot API Documents


**简介**:edu-boss-boot API Documents


**HOST**:eduboss.lagounews.com


**联系人**:leo


**Version**:0.0.1


**接口路径**:/v2/api-docs?group=edu-boss-boot


[TOC]






# 活动课程


## 保存活动商品


**接口地址**:`/boss/activityCourse/save`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"courseId": 0,
	"beginTime": "",
	"endTime": "",
	"amount": 0,
	"stock": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reqVo|reqVo|body|true|活动课程对象|活动课程对象|
|&emsp;&emsp;id|活动课程id||false|integer(int32)||
|&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;beginTime|活动开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|活动结束时间||false|string(date-time)||
|&emsp;&emsp;amount|活动价格||false|number(double)||
|&emsp;&emsp;stock|库存值||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«object»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 更新活动商品状态


**接口地址**:`/boss/activityCourse/updateStatus`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"courseId": 0,
	"beginTime": "",
	"endTime": "",
	"amount": 0,
	"stock": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reqVo|reqVo|body|true|活动课程对象|活动课程对象|
|&emsp;&emsp;id|活动课程id||false|integer(int32)||
|&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;beginTime|活动开始时间||false|string(date-time)||
|&emsp;&emsp;endTime|活动结束时间||false|string(date-time)||
|&emsp;&emsp;amount|活动价格||false|number(double)||
|&emsp;&emsp;stock|库存值||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«object»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


# 用户接口


## 启用用户


**接口地址**:`/boss/user/enableUser`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|userId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 封禁用户


**接口地址**:`/boss/user/forbidUser`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|request|request|body|true|封禁用户请求|封禁用户请求|
|&emsp;&emsp;userId|用户ID||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 分页查询用户信息


**接口地址**:`/boss/user/getUserPages`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"currentPage": 0,
	"pageSize": 0,
	"phone": "",
	"userId": 0,
	"startCreateTime": "",
	"endCreateTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userQueryParam|userQueryParam|body|true|UserQueryParam|UserQueryParam|
|&emsp;&emsp;currentPage|||false|integer(int32)||
|&emsp;&emsp;pageSize|||false|integer(int32)||
|&emsp;&emsp;phone|||false|string||
|&emsp;&emsp;userId|||false|integer(int32)||
|&emsp;&emsp;startCreateTime|||false|string(date-time)||
|&emsp;&emsp;endCreateTime|||false|string(date-time)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


# 用户权限


## 获取用户菜单和资源权限列表


**接口地址**:`/boss/permission/getUserPermissions`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO«用户菜单、资源权限»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||用户菜单、资源权限|用户菜单、资源权限|
|&emsp;&emsp;menuList|菜单列表|array|菜单节点，包括子菜单列表|
|&emsp;&emsp;&emsp;&emsp;parentId|父级菜单ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;selected|是否被选中，用于编辑菜单时标记所选中上级菜单||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|菜单名称||false|string||
|&emsp;&emsp;&emsp;&emsp;subMenuList|||false|array|菜单节点，包括子菜单列表|
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;href|路径||false|string||
|&emsp;&emsp;&emsp;&emsp;icon|图标||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;orderNum|排序||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;description|描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;shown|是否显示||false|boolean||
|&emsp;&emsp;&emsp;&emsp;level|菜单层级||false|integer(int32)||
|&emsp;&emsp;resourceList|资源列表|array|资源信息|
|&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;categoryId|资源分类ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;url|资源URL||false|string||
|&emsp;&emsp;&emsp;&emsp;description|资源描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;selected|是否选中||false|boolean||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"menuList": [
			{
				"parentId": 0,
				"selected": true,
				"id": 0,
				"name": "",
				"subMenuList": [
					{
						"parentId": 0,
						"selected": true,
						"id": 0,
						"name": "",
						"subMenuList": [
							{}
						],
						"createdBy": "",
						"href": "",
						"icon": "",
						"updatedBy": "",
						"createdTime": "",
						"orderNum": 0,
						"description": "",
						"updatedTime": "",
						"operatorId": 0,
						"shown": true,
						"level": 0
					}
				],
				"createdBy": "",
				"href": "",
				"icon": "",
				"updatedBy": "",
				"createdTime": "",
				"orderNum": 0,
				"description": "",
				"updatedTime": "",
				"operatorId": 0,
				"shown": true,
				"level": 0
			}
		],
		"resourceList": [
			{
				"name": "",
				"categoryId": 0,
				"id": 0,
				"createdBy": "",
				"url": "",
				"description": "",
				"updatedBy": "",
				"createdTime": "",
				"selected": true,
				"updatedTime": "",
				"operatorId": 0
			}
		]
	}
}
```


# 章节内容


## getBySectionId


**接口地址**:`/boss/course/section/getBySectionId`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sectionId|sectionId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## getSectionAndLesson


**接口地址**:`/boss/course/section/getSectionAndLesson`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|courseId|courseId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## saveOrUpdateSection


**接口地址**:`/boss/course/section/saveOrUpdateSection`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"courseId": 0,
	"courseName": "",
	"sectionName": "",
	"description": "",
	"orderNum": 0,
	"status": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sectionForm|sectionForm|body|true|章节|章节|
|&emsp;&emsp;id|章节ID||false|integer(int32)||
|&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;courseName|课程名称||false|string||
|&emsp;&emsp;sectionName|章节名||false|string||
|&emsp;&emsp;description|章节描述||false|string||
|&emsp;&emsp;orderNum|排序字段||false|integer(int32)||
|&emsp;&emsp;status|状态，0:隐藏；1：待更新；2：已发布||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


# 菜单管理


## 给角色分配菜单


**接口地址**:`/boss/menu/allocateRoleMenus`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"roleId": 0,
	"menuIdList": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|allocateRoleMenuForm|allocateRoleMenuForm|body|true|给角色分配菜单|给角色分配菜单|
|&emsp;&emsp;roleId|角色ID||false|integer(int32)||
|&emsp;&emsp;menuIdList|分配的菜单ID列表||false|array|integer|
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 获取所有菜单


**接口地址**:`/boss/menu/getAll`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:获取所有菜单


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«菜单信息»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|菜单信息|
|&emsp;&emsp;parentId|父级菜单ID|integer(int32)||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;name|菜单名称|string||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;href|路径|string||
|&emsp;&emsp;icon|图标|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;orderNum|排序|integer(int32)||
|&emsp;&emsp;description|描述|string||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||
|&emsp;&emsp;shown|是否显示|boolean||
|&emsp;&emsp;level|菜单层级|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"parentId": 0,
			"id": 0,
			"name": "",
			"createdBy": "",
			"href": "",
			"icon": "",
			"updatedBy": "",
			"createdTime": "",
			"orderNum": 0,
			"description": "",
			"updatedTime": "",
			"operatorId": 0,
			"shown": true,
			"level": 0
		}
	]
}
```


## 获取编辑菜单页面信息


**接口地址**:`/boss/menu/getEditMenuInfo`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|菜单ID|String|true|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«Map»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 获取所有菜单并按层级展示


**接口地址**:`/boss/menu/getMenuNodeList`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«菜单节点，包括子菜单列表»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|菜单节点，包括子菜单列表|
|&emsp;&emsp;parentId|父级菜单ID|integer(int32)||
|&emsp;&emsp;selected|是否被选中，用于编辑菜单时标记所选中上级菜单|boolean||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;name|菜单名称|string||
|&emsp;&emsp;subMenuList||array|菜单节点，包括子菜单列表|
|&emsp;&emsp;&emsp;&emsp;parentId|父级菜单ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;selected|是否被选中，用于编辑菜单时标记所选中上级菜单||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|菜单名称||false|string||
|&emsp;&emsp;&emsp;&emsp;subMenuList|||false|array|菜单节点，包括子菜单列表|
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;href|路径||false|string||
|&emsp;&emsp;&emsp;&emsp;icon|图标||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;orderNum|排序||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;description|描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;shown|是否显示||false|boolean||
|&emsp;&emsp;&emsp;&emsp;level|菜单层级||false|integer(int32)||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;href|路径|string||
|&emsp;&emsp;icon|图标|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;orderNum|排序|integer(int32)||
|&emsp;&emsp;description|描述|string||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||
|&emsp;&emsp;shown|是否显示|boolean||
|&emsp;&emsp;level|菜单层级|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"parentId": 0,
			"selected": true,
			"id": 0,
			"name": "",
			"subMenuList": [
				{
					"parentId": 0,
					"selected": true,
					"id": 0,
					"name": "",
					"subMenuList": [
						{}
					],
					"createdBy": "",
					"href": "",
					"icon": "",
					"updatedBy": "",
					"createdTime": "",
					"orderNum": 0,
					"description": "",
					"updatedTime": "",
					"operatorId": 0,
					"shown": true,
					"level": 0
				}
			],
			"createdBy": "",
			"href": "",
			"icon": "",
			"updatedBy": "",
			"createdTime": "",
			"orderNum": 0,
			"description": "",
			"updatedTime": "",
			"operatorId": 0,
			"shown": true,
			"level": 0
		}
	]
}
```


## 按条件分页查询菜单


**接口地址**:`/boss/menu/getMenuPages`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"name": "",
	"shown": true,
	"startCreateTime": "",
	"endCreateTime": "",
	"querySubLevel": true,
	"current": 0,
	"size": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|menuQueryParam|menuQueryParam|body|true|菜单查询表单|菜单查询表单|
|&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;name|菜单名称||false|string||
|&emsp;&emsp;shown|是否显示||false|boolean||
|&emsp;&emsp;startCreateTime|按创建时间查询-起始时间||false|string(date-time)||
|&emsp;&emsp;endCreateTime|按创建时间查询-结束时间||false|string(date-time)||
|&emsp;&emsp;querySubLevel|是否要求查看下级菜单，在查询下级菜单列表时传true||false|boolean||
|&emsp;&emsp;current|当前页||false|integer(int32)||
|&emsp;&emsp;size|每页数据量||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«Page«菜单信息»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|Page«菜单信息»|Page«菜单信息»|
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;records||array|菜单信息|
|&emsp;&emsp;&emsp;&emsp;parentId|父级菜单ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|菜单名称||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;href|路径||false|string||
|&emsp;&emsp;&emsp;&emsp;icon|图标||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;orderNum|排序||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;description|描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;shown|是否显示||false|boolean||
|&emsp;&emsp;&emsp;&emsp;level|菜单层级||false|integer(int32)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column|||false|string||
|&emsp;&emsp;&emsp;&emsp;asc|||false|boolean||
|&emsp;&emsp;optimizeCountSql||boolean||
|&emsp;&emsp;hitCount||boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"pages": 0,
		"searchCount": true,
		"records": [
			{
				"parentId": 0,
				"id": 0,
				"name": "",
				"createdBy": "",
				"href": "",
				"icon": "",
				"updatedBy": "",
				"createdTime": "",
				"orderNum": 0,
				"description": "",
				"updatedTime": "",
				"operatorId": 0,
				"shown": true,
				"level": 0
			}
		],
		"total": 0,
		"size": 0,
		"current": 0,
		"orders": [
			{
				"column": "",
				"asc": true
			}
		],
		"optimizeCountSql": true,
		"hitCount": true
	}
}
```


## 获取角色拥有的菜单列表


**接口地址**:`/boss/menu/getRoleMenus`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:在给角色分配菜单时，跳转到角色-菜单列表页，并标记哪些菜单已分配给该角色


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleId|roleId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«菜单节点，包括子菜单列表»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|菜单节点，包括子菜单列表|
|&emsp;&emsp;parentId|父级菜单ID|integer(int32)||
|&emsp;&emsp;selected|是否被选中，用于编辑菜单时标记所选中上级菜单|boolean||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;name|菜单名称|string||
|&emsp;&emsp;subMenuList||array|菜单节点，包括子菜单列表|
|&emsp;&emsp;&emsp;&emsp;parentId|父级菜单ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;selected|是否被选中，用于编辑菜单时标记所选中上级菜单||false|boolean||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|菜单名称||false|string||
|&emsp;&emsp;&emsp;&emsp;subMenuList|||false|array|菜单节点，包括子菜单列表|
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;href|路径||false|string||
|&emsp;&emsp;&emsp;&emsp;icon|图标||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;orderNum|排序||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;description|描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;shown|是否显示||false|boolean||
|&emsp;&emsp;&emsp;&emsp;level|菜单层级||false|integer(int32)||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;href|路径|string||
|&emsp;&emsp;icon|图标|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;orderNum|排序|integer(int32)||
|&emsp;&emsp;description|描述|string||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||
|&emsp;&emsp;shown|是否显示|boolean||
|&emsp;&emsp;level|菜单层级|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"parentId": 0,
			"selected": true,
			"id": 0,
			"name": "",
			"subMenuList": [
				{
					"parentId": 0,
					"selected": true,
					"id": 0,
					"name": "",
					"subMenuList": [
						{}
					],
					"createdBy": "",
					"href": "",
					"icon": "",
					"updatedBy": "",
					"createdTime": "",
					"orderNum": 0,
					"description": "",
					"updatedTime": "",
					"operatorId": 0,
					"shown": true,
					"level": 0
				}
			],
			"createdBy": "",
			"href": "",
			"icon": "",
			"updatedBy": "",
			"createdTime": "",
			"orderNum": 0,
			"description": "",
			"updatedTime": "",
			"operatorId": 0,
			"shown": true,
			"level": 0
		}
	]
}
```


## 保存或新增菜单


**接口地址**:`/boss/menu/saveOrUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:保存或新增菜单


**请求示例**:


```javascript
{
	"id": 0,
	"parentId": 0,
	"name": "",
	"href": "",
	"icon": "",
	"orderNum": 0,
	"description": "",
	"shown": true
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|menuForm|menuForm|body|true|菜单表单信息|菜单表单信息|
|&emsp;&emsp;id|菜单ID，更新时须带上传给后台||false|integer(int32)||
|&emsp;&emsp;parentId|菜单父id||true|integer(int32)||
|&emsp;&emsp;name|菜单名称||true|string||
|&emsp;&emsp;href|菜单路径||true|string||
|&emsp;&emsp;icon|菜单图标||false|string||
|&emsp;&emsp;orderNum|菜单序号||false|integer(int32)||
|&emsp;&emsp;description|菜单描述||false|string||
|&emsp;&emsp;shown|是否显示||false|boolean||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 是否显示开关


**接口地址**:`/boss/menu/switchShown`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 根据ID查询菜单


**接口地址**:`/boss/menu/{id}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:根据ID查询菜单


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«菜单信息»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|菜单信息|菜单信息|
|&emsp;&emsp;parentId|父级菜单ID|integer(int32)||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;name|菜单名称|string||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;href|路径|string||
|&emsp;&emsp;icon|图标|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;orderNum|排序|integer(int32)||
|&emsp;&emsp;description|描述|string||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||
|&emsp;&emsp;shown|是否显示|boolean||
|&emsp;&emsp;level|菜单层级|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"parentId": 0,
		"id": 0,
		"name": "",
		"createdBy": "",
		"href": "",
		"icon": "",
		"updatedBy": "",
		"createdTime": "",
		"orderNum": 0,
		"description": "",
		"updatedTime": "",
		"operatorId": 0,
		"shown": true,
		"level": 0
	}
}
```


## 删除菜单


**接口地址**:`/boss/menu/{id}`


**请求方式**:`DELETE`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:根据id删除菜单


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


# 角色管理


## 获取所有角色


**接口地址**:`/boss/role/all`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«角色信息»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|角色信息|
|&emsp;&emsp;code|角色编码|string||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;name|角色名称|string||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;description|角色描述|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"code": "",
			"id": 0,
			"name": "",
			"createdBy": "",
			"description": "",
			"updatedBy": "",
			"createdTime": "",
			"updatedTime": "",
			"operatorId": 0
		}
	]
}
```


## 给用户分配角色


**接口地址**:`/boss/role/allocateUserRoles`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"userId": 0,
	"roleIdList": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|allocateUserRoleForm|allocateUserRoleForm|body|true|分配用户角色表单|分配用户角色表单|
|&emsp;&emsp;userId|用户ID||true|integer(int32)||
|&emsp;&emsp;roleIdList|角色ID列表||false|array|integer|
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 按条件查询角色


**接口地址**:`/boss/role/getRolePages`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"code": "",
	"id": 0,
	"name": "",
	"startCreateTime": "",
	"endCreateTime": "",
	"current": 0,
	"size": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleQueryParam|roleQueryParam|body|true|角色查询表单|角色查询表单|
|&emsp;&emsp;code|角色编码||false|string||
|&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;name|角色名称||false|string||
|&emsp;&emsp;startCreateTime|按创建时间查询-起始时间||false|string(date-time)||
|&emsp;&emsp;endCreateTime|按创建时间查询-结束时间||false|string(date-time)||
|&emsp;&emsp;current|当前页||false|integer(int32)||
|&emsp;&emsp;size|每页数据量||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«Page«角色信息»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|Page«角色信息»|Page«角色信息»|
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;records||array|角色信息|
|&emsp;&emsp;&emsp;&emsp;code|角色编码||false|string||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|角色名称||false|string||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;description|角色描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column|||false|string||
|&emsp;&emsp;&emsp;&emsp;asc|||false|boolean||
|&emsp;&emsp;optimizeCountSql||boolean||
|&emsp;&emsp;hitCount||boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"pages": 0,
		"searchCount": true,
		"records": [
			{
				"code": "",
				"id": 0,
				"name": "",
				"createdBy": "",
				"description": "",
				"updatedBy": "",
				"createdTime": "",
				"updatedTime": "",
				"operatorId": 0
			}
		],
		"total": 0,
		"size": 0,
		"current": 0,
		"orders": [
			{
				"column": "",
				"asc": true
			}
		],
		"optimizeCountSql": true,
		"hitCount": true
	}
}
```


## 列出所有角色，并且标记当前用户ID是否拥有该角色


**接口地址**:`/boss/role/getRolesWithUserPermission`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:在分配角色时，展示所有有效角色，并且标记出用户当前已拥有的角色


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|userId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«用户-角色信息，列出所有角色及用户是否拥有该角色»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|用户-角色信息，列出所有角色及用户是否拥有该角色|
|&emsp;&emsp;id|角色ID|integer(int32)||
|&emsp;&emsp;name|角色名称|string||
|&emsp;&emsp;hasPermission|是否有权限|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"id": 0,
			"name": "",
			"hasPermission": true
		}
	]
}
```


## 保存或者更新角色


**接口地址**:`/boss/role/saveOrUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"code": "",
	"name": "",
	"description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleForm|roleForm|body|true|角色表单信息|角色表单信息|
|&emsp;&emsp;id|角色ID，新建时为空||false|integer(int32)||
|&emsp;&emsp;code|角色编码||true|string||
|&emsp;&emsp;name|角色名称||true|string||
|&emsp;&emsp;description|角色描述||false|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 查询用户角色


**接口地址**:`/boss/role/user/{userId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|userId|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«Set«角色信息»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|角色信息|
|&emsp;&emsp;code|角色编码|string||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;name|角色名称|string||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;description|角色描述|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"code": "",
			"id": 0,
			"name": "",
			"createdBy": "",
			"description": "",
			"updatedBy": "",
			"createdTime": "",
			"updatedTime": "",
			"operatorId": 0
		}
	]
}
```


## 获取角色


**接口地址**:`/boss/role/{id}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«角色信息»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|角色信息|角色信息|
|&emsp;&emsp;code|角色编码|string||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;name|角色名称|string||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;description|角色描述|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"code": "",
		"id": 0,
		"name": "",
		"createdBy": "",
		"description": "",
		"updatedBy": "",
		"createdTime": "",
		"updatedTime": "",
		"operatorId": 0
	}
}
```


## 删除角色


**接口地址**:`/boss/role/{id}`


**请求方式**:`DELETE`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


# 课时内容


## 通过Id获取课时


**接口地址**:`/boss/course/lesson/getById`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|lessonId|lessonId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 保存或更新课时


**接口地址**:`/boss/course/lesson/saveOrUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"courseId": 0,
	"sectionId": 0,
	"theme": "",
	"duration": 0,
	"isFree": true,
	"orderNum": 0,
	"status": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|lessonForm|lessonForm|body|true|课时信息|课时信息|
|&emsp;&emsp;id|课时Id||false|integer(int32)||
|&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;sectionId|章节id||false|integer(int32)||
|&emsp;&emsp;theme|课时主题||false|string||
|&emsp;&emsp;duration|课时时长(分钟)||false|integer(int32)||
|&emsp;&emsp;isFree|是否免费||false|boolean||
|&emsp;&emsp;orderNum|排序字段||false|integer(int32)||
|&emsp;&emsp;status|课时状态,0-隐藏，1-未发布，2-已发布||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


# 课程


## 课程上下架


**接口地址**:`/boss/course/changeState`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|courseId|课程ID|query|false|string||
|status|课程状态，0-草稿，1-上架|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 通过课程Id获取课程信息


**接口地址**:`/boss/course/getCourseById`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|courseId|courseId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«课程返回信息»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|课程返回信息|课程返回信息|
|&emsp;&emsp;id|课程ID|integer(int32)||
|&emsp;&emsp;courseName|课程名|string||
|&emsp;&emsp;brief|课程一句话简介|string||
|&emsp;&emsp;teacherDTO|讲师信息|TeacherDTO|TeacherDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;teacherName|||false|string||
|&emsp;&emsp;&emsp;&emsp;teacherHeadPicUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;position|||false|string||
|&emsp;&emsp;&emsp;&emsp;description|||false|string||
|&emsp;&emsp;courseDescriptionMarkDown|课程描述|string||
|&emsp;&emsp;price|原价|number(double)||
|&emsp;&emsp;discounts|优惠价|number(double)||
|&emsp;&emsp;priceTag|原价标签|string||
|&emsp;&emsp;previewFirstField|课程预览第一个字段|string||
|&emsp;&emsp;previewSecondField|课程预览第二个字段|string||
|&emsp;&emsp;discountsTag|优惠价格标签|string||
|&emsp;&emsp;courseListImg|课程列表展示图片|string||
|&emsp;&emsp;courseImgUrl|解锁封面|string||
|&emsp;&emsp;sortNum| 课程排序，用于后台保存草稿时用到|integer(int32)||
|&emsp;&emsp;status|课程状态，0-草稿，1-上架|integer(int32)||
|&emsp;&emsp;sales|显示销量|integer(int32)||
|&emsp;&emsp;activityCourse|课程是否做秒杀活动 true是 false不是|boolean||
|&emsp;&emsp;activityCourseDTO|活动课程信息|活动课程对象|活动课程对象|
|&emsp;&emsp;&emsp;&emsp;id|活动课程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;beginTime|活动开始时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|活动结束时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;amount|活动价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;stock|库存值||false|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"id": 0,
		"courseName": "",
		"brief": "",
		"teacherDTO": {
			"id": 0,
			"courseId": 0,
			"teacherName": "",
			"teacherHeadPicUrl": "",
			"position": "",
			"description": ""
		},
		"courseDescriptionMarkDown": "",
		"price": 0,
		"discounts": 0,
		"priceTag": "",
		"previewFirstField": "",
		"previewSecondField": "",
		"discountsTag": "",
		"courseListImg": "",
		"courseImgUrl": "",
		"sortNum": 0,
		"status": 0,
		"sales": 0,
		"activityCourse": true,
		"activityCourseDTO": {
			"id": 0,
			"courseId": 0,
			"beginTime": "",
			"endTime": "",
			"amount": 0,
			"stock": 0
		}
	}
}
```


## 分页查询课程信息


**接口地址**:`/boss/course/getQueryCourses`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"currentPage": 0,
	"pageSize": 0,
	"courseName": "",
	"status": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|courseQueryParam|courseQueryParam|body|true|CourseQueryParam|CourseQueryParam|
|&emsp;&emsp;currentPage|||false|integer(int32)||
|&emsp;&emsp;pageSize|||false|integer(int32)||
|&emsp;&emsp;courseName|||false|string||
|&emsp;&emsp;status|||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 保存或者更新课程信息


**接口地址**:`/boss/course/saveOrUpdateCourse`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"courseName": "",
	"brief": "",
	"teacherDTO": {
		"id": 0,
		"courseId": 0,
		"teacherName": "",
		"teacherHeadPicUrl": "",
		"position": "",
		"description": ""
	},
	"courseDescriptionMarkDown": "",
	"price": 0,
	"discounts": 0,
	"priceTag": "",
	"discountsTag": "",
	"isNew": true,
	"isNewDes": "",
	"courseListImg": "",
	"courseImgUrl": "",
	"sortNum": 0,
	"previewFirstField": "",
	"previewSecondField": "",
	"status": 0,
	"sales": 0,
	"activityCourse": true,
	"activityCourseDTO": {
		"id": 0,
		"courseId": 0,
		"beginTime": "",
		"endTime": "",
		"amount": 0,
		"stock": 0
	},
	"autoOnlineTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|courseForm|courseForm|body|true|课程保存对象|课程保存对象|
|&emsp;&emsp;id|课程ID||false|integer(int32)||
|&emsp;&emsp;courseName|课程名||false|string||
|&emsp;&emsp;brief|课程一句话简介||false|string||
|&emsp;&emsp;teacherDTO|讲师信息||false|TeacherDTO|TeacherDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;teacherName|||false|string||
|&emsp;&emsp;&emsp;&emsp;teacherHeadPicUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;position|||false|string||
|&emsp;&emsp;&emsp;&emsp;description|||false|string||
|&emsp;&emsp;courseDescriptionMarkDown|课程描述||false|string||
|&emsp;&emsp;price|原价||false|number(double)||
|&emsp;&emsp;discounts|优惠价||false|number(double)||
|&emsp;&emsp;priceTag|原价标签||false|string||
|&emsp;&emsp;discountsTag|优惠标签||false|string||
|&emsp;&emsp;isNew|是否新品||false|boolean||
|&emsp;&emsp;isNewDes|广告语||false|string||
|&emsp;&emsp;courseListImg|课程列表展示图片||false|string||
|&emsp;&emsp;courseImgUrl|解锁封面||false|string||
|&emsp;&emsp;sortNum|课程排序，用于后台保存草稿时用到||false|integer(int32)||
|&emsp;&emsp;previewFirstField|课程预览第一个字段||false|string||
|&emsp;&emsp;previewSecondField|课程预览第二个字段||false|string||
|&emsp;&emsp;status|课程状态，0-草稿，1-上架||false|integer(int32)||
|&emsp;&emsp;sales|显示销量||false|integer(int32)||
|&emsp;&emsp;activityCourse|课程是否做秒杀活动 true是 false不是||false|boolean||
|&emsp;&emsp;activityCourseDTO|活动课程信息||false|活动课程对象|活动课程对象|
|&emsp;&emsp;&emsp;&emsp;id|活动课程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;beginTime|活动开始时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|活动结束时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;amount|活动价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;stock|库存值||false|integer(int32)||
|&emsp;&emsp;autoOnlineTime|自动上架时间||false|string(date-time)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«CourseDTO»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|CourseDTO|CourseDTO|
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;courseName||string||
|&emsp;&emsp;brief||string||
|&emsp;&emsp;courseDescription||string||
|&emsp;&emsp;teacherId||integer(int32)||
|&emsp;&emsp;totalCourseTime||integer(int32)||
|&emsp;&emsp;sales||integer(int32)||
|&emsp;&emsp;actualSales||integer(int32)||
|&emsp;&emsp;price||number(double)||
|&emsp;&emsp;priceTag||string||
|&emsp;&emsp;discounts||number(double)||
|&emsp;&emsp;discountsTag||string||
|&emsp;&emsp;courseImgUrl||string||
|&emsp;&emsp;shareTitle||string||
|&emsp;&emsp;shareDescription||string||
|&emsp;&emsp;shareImageTitle||string||
|&emsp;&emsp;isNew||boolean||
|&emsp;&emsp;isNewDes||string||
|&emsp;&emsp;lastOperatorId||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;autoOnlineTime||string(date-time)||
|&emsp;&emsp;isDel||boolean||
|&emsp;&emsp;totalDuration||integer(int32)||
|&emsp;&emsp;seoDescription||string||
|&emsp;&emsp;seoKeywords||string||
|&emsp;&emsp;seoTitle||string||
|&emsp;&emsp;h5Url||string||
|&emsp;&emsp;courseListImg||string||
|&emsp;&emsp;tag||string||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;sortNum||integer(int32)||
|&emsp;&emsp;brokerageRate||integer(int32)||
|&emsp;&emsp;joinDistribution||boolean||
|&emsp;&emsp;lastNoticeTime||string(date-time)||
|&emsp;&emsp;previewFirstField||string||
|&emsp;&emsp;previewSecondField||string||
|&emsp;&emsp;distributionPosterImage||string||
|&emsp;&emsp;distributionCopywriter||string||
|&emsp;&emsp;isGray||boolean||
|&emsp;&emsp;sectionDTOS||array|SectionDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sectionName|||false|string||
|&emsp;&emsp;&emsp;&emsp;description|||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;isVisible|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;isDe|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;orderNum|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;lastOperatorId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;lessonDTOS|||false|array|LessonDTO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sectionId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;theme|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;duration|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;durationNum|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isFree|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startImgUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;textContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;markdownTextContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;transcode|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;resourceUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastOperatorId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDel|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;orderNum|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;aliFileUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;aliFileDk|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;aliFileEdk|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;aliFileVid|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isTimingPublish|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;publishTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mediaDTO|||false|MediaDTO|MediaDTO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sectionId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lessonId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;channel|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mediaType|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;coverImageUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;duration|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileEdk|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileDk|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDel|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastOperatorId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;durationNum|||false|integer(int32)||
|&emsp;&emsp;teacherDTO||TeacherDTO|TeacherDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;teacherName|||false|string||
|&emsp;&emsp;&emsp;&emsp;teacherHeadPicUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;position|||false|string||
|&emsp;&emsp;&emsp;&emsp;description|||false|string||
|&emsp;&emsp;courseUrl||string||
|&emsp;&emsp;topNCourseLesson||array|LessonDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;sectionId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;theme|||false|string||
|&emsp;&emsp;&emsp;&emsp;duration|||false|string||
|&emsp;&emsp;&emsp;&emsp;durationNum|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;isFree|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;startImgUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;textContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;markdownTextContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;transcode|||false|string||
|&emsp;&emsp;&emsp;&emsp;resourceUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;lastOperatorId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;isDel|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;fileId|||false|string||
|&emsp;&emsp;&emsp;&emsp;orderNum|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;aliFileUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;aliFileDk|||false|string||
|&emsp;&emsp;&emsp;&emsp;aliFileEdk|||false|string||
|&emsp;&emsp;&emsp;&emsp;aliFileVid|||false|string||
|&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;isTimingPublish|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;publishTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;mediaDTO|||false|MediaDTO|MediaDTO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sectionId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lessonId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;channel|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mediaType|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;coverImageUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;duration|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileId|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileEdk|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileSize|||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fileDk|||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isDel|||false|boolean||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;lastOperatorId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;durationNum|||false|integer(int32)||
|&emsp;&emsp;isBuy||boolean||
|&emsp;&emsp;lessonUpdateCount||integer(int32)||
|&emsp;&emsp;compareTime||string(date-time)||
|&emsp;&emsp;lastLearnLessonName||string||
|&emsp;&emsp;courseDescriptionMarkDown||string||
|&emsp;&emsp;activityCourse||boolean||
|&emsp;&emsp;activityTime||integer(int64)||
|&emsp;&emsp;activityCourseDTO||活动课程对象|活动课程对象|
|&emsp;&emsp;&emsp;&emsp;id|活动课程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;beginTime|活动开始时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|活动结束时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;amount|活动价格||false|number(double)||
|&emsp;&emsp;&emsp;&emsp;stock|库存值||false|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"id": 0,
		"courseName": "",
		"brief": "",
		"courseDescription": "",
		"teacherId": 0,
		"totalCourseTime": 0,
		"sales": 0,
		"actualSales": 0,
		"price": 0,
		"priceTag": "",
		"discounts": 0,
		"discountsTag": "",
		"courseImgUrl": "",
		"shareTitle": "",
		"shareDescription": "",
		"shareImageTitle": "",
		"isNew": true,
		"isNewDes": "",
		"lastOperatorId": 0,
		"createTime": "",
		"updateTime": "",
		"autoOnlineTime": "",
		"isDel": true,
		"totalDuration": 0,
		"seoDescription": "",
		"seoKeywords": "",
		"seoTitle": "",
		"h5Url": "",
		"courseListImg": "",
		"tag": "",
		"status": 0,
		"sortNum": 0,
		"brokerageRate": 0,
		"joinDistribution": true,
		"lastNoticeTime": "",
		"previewFirstField": "",
		"previewSecondField": "",
		"distributionPosterImage": "",
		"distributionCopywriter": "",
		"isGray": true,
		"sectionDTOS": [
			{
				"id": 0,
				"courseId": 0,
				"sectionName": "",
				"description": "",
				"createTime": "",
				"updateTime": "",
				"isVisible": true,
				"isDe": true,
				"orderNum": 0,
				"lastOperatorId": 0,
				"status": 0,
				"lessonDTOS": [
					{
						"id": 0,
						"courseId": 0,
						"sectionId": 0,
						"theme": "",
						"duration": "",
						"durationNum": 0,
						"isFree": true,
						"startImgUrl": "",
						"textContent": "",
						"markdownTextContent": "",
						"transcode": "",
						"resourceUrl": "",
						"lastOperatorId": 0,
						"createTime": "",
						"updateTime": "",
						"isDel": true,
						"fileId": "",
						"orderNum": 0,
						"aliFileUrl": "",
						"aliFileDk": "",
						"aliFileEdk": "",
						"aliFileVid": "",
						"status": 0,
						"isTimingPublish": true,
						"publishTime": "",
						"mediaDTO": {
							"id": 0,
							"courseId": 0,
							"sectionId": 0,
							"lessonId": 0,
							"channel": 0,
							"mediaType": 0,
							"coverImageUrl": "",
							"duration": "",
							"fileId": "",
							"fileUrl": "",
							"fileEdk": "",
							"fileSize": 0,
							"fileName": "",
							"fileDk": "",
							"createTime": "",
							"updateTime": "",
							"status": 0,
							"isDel": true,
							"lastOperatorId": 0,
							"durationNum": 0
						}
					}
				]
			}
		],
		"teacherDTO": {
			"id": 0,
			"courseId": 0,
			"teacherName": "",
			"teacherHeadPicUrl": "",
			"position": "",
			"description": ""
		},
		"courseUrl": "",
		"topNCourseLesson": [
			{
				"id": 0,
				"courseId": 0,
				"sectionId": 0,
				"theme": "",
				"duration": "",
				"durationNum": 0,
				"isFree": true,
				"startImgUrl": "",
				"textContent": "",
				"markdownTextContent": "",
				"transcode": "",
				"resourceUrl": "",
				"lastOperatorId": 0,
				"createTime": "",
				"updateTime": "",
				"isDel": true,
				"fileId": "",
				"orderNum": 0,
				"aliFileUrl": "",
				"aliFileDk": "",
				"aliFileEdk": "",
				"aliFileVid": "",
				"status": 0,
				"isTimingPublish": true,
				"publishTime": "",
				"mediaDTO": {
					"id": 0,
					"courseId": 0,
					"sectionId": 0,
					"lessonId": 0,
					"channel": 0,
					"mediaType": 0,
					"coverImageUrl": "",
					"duration": "",
					"fileId": "",
					"fileUrl": "",
					"fileEdk": "",
					"fileSize": 0,
					"fileName": "",
					"fileDk": "",
					"createTime": "",
					"updateTime": "",
					"status": 0,
					"isDel": true,
					"lastOperatorId": 0,
					"durationNum": 0
				}
			}
		],
		"isBuy": true,
		"lessonUpdateCount": 0,
		"compareTime": "",
		"lastLearnLessonName": "",
		"courseDescriptionMarkDown": "",
		"activityCourse": true,
		"activityTime": 0,
		"activityCourseDTO": {
			"id": 0,
			"courseId": 0,
			"beginTime": "",
			"endTime": "",
			"amount": 0,
			"stock": 0
		}
	}
}
```


## 上传图片


**接口地址**:`/boss/course/upload`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|file|file|formData|true|file||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


# 资源管理


## 给角色分配资源


**接口地址**:`/boss/resource/allocateRoleResources`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"roleId": 0,
	"resourceIdList": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|allocateRoleResourceForm|allocateRoleResourceForm|body|true|给角色分配资源|给角色分配资源|
|&emsp;&emsp;roleId|角色ID||false|integer(int32)||
|&emsp;&emsp;resourceIdList|分配的资源ID列表||false|array|integer|
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 查询资源分类列表


**接口地址**:`/boss/resource/category/getAll`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:如果不传资源id值，则不标记是否选中该分类。传了id，会根据资源分类将分类列表中对应的分类标记为选中


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|resourceId|资源ID|Integer|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«资源分类信息»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|资源分类信息|
|&emsp;&emsp;name|分类名称|string||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;sort|排序|integer(int32)||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;selected|是否被选中|boolean||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"name": "",
			"id": 0,
			"sort": 0,
			"createdBy": "",
			"selected": true,
			"updatedBy": "",
			"createdTime": "",
			"updatedTime": "",
			"operatorId": 0
		}
	]
}
```


## 保存或更新资源分类


**接口地址**:`/boss/resource/category/saveOrderUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"name": "",
	"sort": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceCategoryForm|resourceCategoryForm|body|true|资源分类表单信息|资源分类表单信息|
|&emsp;&emsp;id|资源分类ID，新建时为空||false|integer(int32)||
|&emsp;&emsp;name|分类名称||false|string||
|&emsp;&emsp;sort|排序||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 删除资源分类，如果资源分类下有资源，不允许删除


**接口地址**:`/boss/resource/category/{id}`


**请求方式**:`DELETE`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 获取所有资源


**接口地址**:`/boss/resource/getAll`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«资源信息»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|资源信息|
|&emsp;&emsp;name|资源名称|string||
|&emsp;&emsp;categoryId|资源分类ID|integer(int32)||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;url|资源URL|string||
|&emsp;&emsp;description|资源描述|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;selected|是否选中|boolean||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"name": "",
			"categoryId": 0,
			"id": 0,
			"createdBy": "",
			"url": "",
			"description": "",
			"updatedBy": "",
			"createdTime": "",
			"selected": true,
			"updatedTime": "",
			"operatorId": 0
		}
	]
}
```


## 按条件分页查询资源


**接口地址**:`/boss/resource/getResourcePages`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"name": "",
	"startCreateTime": "",
	"url": "",
	"categoryId": 0,
	"endCreateTime": "",
	"current": 0,
	"size": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceQueryParam|resourceQueryParam|body|true|资源查询表单|资源查询表单|
|&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;startCreateTime|按创建时间查询-起始时间||false|string(date-time)||
|&emsp;&emsp;url|资源路径||false|string||
|&emsp;&emsp;categoryId|资源分类ID||false|integer(int32)||
|&emsp;&emsp;endCreateTime|按创建时间查询-结束时间||false|string(date-time)||
|&emsp;&emsp;current|当前页||false|integer(int32)||
|&emsp;&emsp;size|每页数据量||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«Page«资源信息»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|Page«资源信息»|Page«资源信息»|
|&emsp;&emsp;pages||integer(int64)||
|&emsp;&emsp;searchCount||boolean||
|&emsp;&emsp;records||array|资源信息|
|&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;categoryId|资源分类ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;url|资源URL||false|string||
|&emsp;&emsp;&emsp;&emsp;description|资源描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;selected|是否选中||false|boolean||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||
|&emsp;&emsp;total||integer(int64)||
|&emsp;&emsp;size||integer(int64)||
|&emsp;&emsp;current||integer(int64)||
|&emsp;&emsp;orders||array|OrderItem|
|&emsp;&emsp;&emsp;&emsp;column|||false|string||
|&emsp;&emsp;&emsp;&emsp;asc|||false|boolean||
|&emsp;&emsp;optimizeCountSql||boolean||
|&emsp;&emsp;hitCount||boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"pages": 0,
		"searchCount": true,
		"records": [
			{
				"name": "",
				"categoryId": 0,
				"id": 0,
				"createdBy": "",
				"url": "",
				"description": "",
				"updatedBy": "",
				"createdTime": "",
				"selected": true,
				"updatedTime": "",
				"operatorId": 0
			}
		],
		"total": 0,
		"size": 0,
		"current": 0,
		"orders": [
			{
				"column": "",
				"asc": true
			}
		],
		"optimizeCountSql": true,
		"hitCount": true
	}
}
```


## 获取角色拥有的资源列表


**接口地址**:`/boss/resource/getRoleResources`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:在给角色分配资源时，跳转到角色-资源列表页，并标记哪些资源已分配给该角色


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roleId|roleId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«List«资源分类节点信息，按分类展示»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|array|资源分类节点信息，按分类展示|
|&emsp;&emsp;name|分类名称|string||
|&emsp;&emsp;resourceList|资源列表|array|资源信息|
|&emsp;&emsp;&emsp;&emsp;name|资源名称||false|string||
|&emsp;&emsp;&emsp;&emsp;categoryId|资源分类ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;id|主键ID||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createdBy|创建人||false|string||
|&emsp;&emsp;&emsp;&emsp;url|资源URL||false|string||
|&emsp;&emsp;&emsp;&emsp;description|资源描述||false|string||
|&emsp;&emsp;&emsp;&emsp;updatedBy|更新人||false|string||
|&emsp;&emsp;&emsp;&emsp;createdTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;selected|是否选中||false|boolean||
|&emsp;&emsp;&emsp;&emsp;updatedTime|更新时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;operatorId|操作人ID||false|integer(int32)||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;sort|排序|integer(int32)||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;selected|是否被选中|boolean||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": [
		{
			"name": "",
			"resourceList": [
				{
					"name": "",
					"categoryId": 0,
					"id": 0,
					"createdBy": "",
					"url": "",
					"description": "",
					"updatedBy": "",
					"createdTime": "",
					"selected": true,
					"updatedTime": "",
					"operatorId": 0
				}
			],
			"id": 0,
			"sort": 0,
			"createdBy": "",
			"selected": true,
			"updatedBy": "",
			"createdTime": "",
			"updatedTime": "",
			"operatorId": 0
		}
	]
}
```


## 保存或者更新资源


**接口地址**:`/boss/resource/saveOrUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"name": "",
	"categoryId": 0,
	"url": "",
	"description": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|resourceForm|resourceForm|body|true|资源表单信息|资源表单信息|
|&emsp;&emsp;id|资源ID，新建时为空||false|integer(int32)||
|&emsp;&emsp;name|资源名称||true|string||
|&emsp;&emsp;categoryId|资源分类ID||true|integer(int32)||
|&emsp;&emsp;url|资源路径||true|string||
|&emsp;&emsp;description|资源描述||false|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


## 获取资源


**接口地址**:`/boss/resource/{id}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«资源信息»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|资源信息|资源信息|
|&emsp;&emsp;name|资源名称|string||
|&emsp;&emsp;categoryId|资源分类ID|integer(int32)||
|&emsp;&emsp;id|主键ID|integer(int32)||
|&emsp;&emsp;createdBy|创建人|string||
|&emsp;&emsp;url|资源URL|string||
|&emsp;&emsp;description|资源描述|string||
|&emsp;&emsp;updatedBy|更新人|string||
|&emsp;&emsp;createdTime|创建时间|string(date-time)||
|&emsp;&emsp;selected|是否选中|boolean||
|&emsp;&emsp;updatedTime|更新时间|string(date-time)||
|&emsp;&emsp;operatorId|操作人ID|integer(int32)||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {
		"name": "",
		"categoryId": 0,
		"id": 0,
		"createdBy": "",
		"url": "",
		"description": "",
		"updatedBy": "",
		"createdTime": "",
		"selected": true,
		"updatedTime": "",
		"operatorId": 0
	}
}
```


## 删除资源


**接口地址**:`/boss/resource/{id}`


**请求方式**:`DELETE`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result«boolean»|
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|boolean||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": true
}
```


# 阿里上传


## 获取阿里云图片上传凭证


**接口地址**:`/boss/course/upload/aliyunImagUploadAddressAdnAuth.json`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 阿里云转码请求


**接口地址**:`/boss/course/upload/aliyunTransCode.json`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"courseId": 0,
	"sectionId": 0,
	"lessonId": 0,
	"channel": 0,
	"mediaType": 0,
	"coverImageUrl": "",
	"duration": "",
	"fileId": "",
	"fileUrl": "",
	"fileEdk": "",
	"fileSize": 0,
	"fileName": "",
	"fileDk": "",
	"createTime": "",
	"updateTime": "",
	"status": 0,
	"isDel": true,
	"lastOperatorId": 0,
	"durationNum": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|courseMediaDTO|courseMediaDTO|body|true|MediaDTO|MediaDTO|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;sectionId|||false|integer(int32)||
|&emsp;&emsp;lessonId|||false|integer(int32)||
|&emsp;&emsp;channel|||false|integer(int32)||
|&emsp;&emsp;mediaType|||false|integer(int32)||
|&emsp;&emsp;coverImageUrl|||false|string||
|&emsp;&emsp;duration|||false|string||
|&emsp;&emsp;fileId|||false|string||
|&emsp;&emsp;fileUrl|||false|string||
|&emsp;&emsp;fileEdk|||false|string||
|&emsp;&emsp;fileSize|||false|number(double)||
|&emsp;&emsp;fileName|||false|string||
|&emsp;&emsp;fileDk|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;isDel|||false|boolean||
|&emsp;&emsp;lastOperatorId|||false|integer(int32)||
|&emsp;&emsp;durationNum|||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 阿里云转码进度


**接口地址**:`/boss/course/upload/aliyunTransCodePercent.json`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|lessonId|lessonId|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 获取阿里云视频上传凭证


**接口地址**:`/boss/course/upload/aliyunVideoUploadAddressAdnAuth.json`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|fileName|fileName|query|false|string||
|imageUrl|imageUrl|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 获取媒体信息


**接口地址**:`/boss/course/upload/getMediaByLessonId.json`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|lessonId|lessonId|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```


## 刷新阿里云视频上传凭证


**接口地址**:`/boss/course/upload/refreshAliyunVideoUploadAddressAdnAuth.json`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|videoId|videoId|query|true|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|Result|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|处理结果code|string||
|mesg|处理结果描述信息|string||
|time|请求结果生成时间戳|string(date-time)|string(date-time)|
|data|处理结果数据信息|object||


**响应示例**:
```javascript
{
	"code": "",
	"mesg": "",
	"time": "",
	"data": {}
}
```