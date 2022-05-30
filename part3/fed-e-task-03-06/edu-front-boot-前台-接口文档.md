# edu-front-boot API Documents


**简介**:edu-front-boot API Documents


**HOST**:edufront.lagounews.com


**联系人**:leo


**Version**:0.0.1


**接口路径**:/v2/api-docs?group=edu-front-boot


[TOC]






# sentinel接口


## addRule


**接口地址**:`/front/sentinel/addRule`


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
|200|OK|ResponseDTO«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


## delRule


**接口地址**:`/front/sentinel/delRule`


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
|200|OK|ResponseDTO«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


## test


**接口地址**:`/front/sentinel/test1`


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
|200|OK|ResponseDTO«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


# 上传接口


## 上传图片


**接口地址**:`/front/upload/img`


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
|200|OK|ResponseDTO«UpLoadResult»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||UpLoadResult|UpLoadResult|
|&emsp;&emsp;uid||string||
|&emsp;&emsp;name||string||
|&emsp;&emsp;status||string||
|&emsp;&emsp;response||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"uid": "",
		"name": "",
		"status": "",
		"response": ""
	}
}
```


# 广告接口


## 根据Id获取广告信息


**接口地址**:`/front/ad/getAdById`


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
|200|OK|ResponseDTO«PromotionAdDTO»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||PromotionAdDTO|PromotionAdDTO|
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;name||string||
|&emsp;&emsp;spaceId||integer(int32)||
|&emsp;&emsp;keyword||string||
|&emsp;&emsp;htmlContent||string||
|&emsp;&emsp;text||string||
|&emsp;&emsp;img||string||
|&emsp;&emsp;link||string||
|&emsp;&emsp;startTime||string(date-time)||
|&emsp;&emsp;endTime||string(date-time)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;priority||integer(int32)||
|&emsp;&emsp;startTimeFormatString||string||
|&emsp;&emsp;endTimeFormatString||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"id": 0,
		"name": "",
		"spaceId": 0,
		"keyword": "",
		"htmlContent": "",
		"text": "",
		"img": "",
		"link": "",
		"startTime": "",
		"endTime": "",
		"createTime": "",
		"updateTime": "",
		"status": 0,
		"priority": 0,
		"startTimeFormatString": "",
		"endTimeFormatString": ""
	}
}
```


## 获取所有的广告列表


**接口地址**:`/front/ad/getAdList`


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
|200|OK|ResponseDTO«List«PromotionAdDTO»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||array|PromotionAdDTO|
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;name||string||
|&emsp;&emsp;spaceId||integer(int32)||
|&emsp;&emsp;keyword||string||
|&emsp;&emsp;htmlContent||string||
|&emsp;&emsp;text||string||
|&emsp;&emsp;img||string||
|&emsp;&emsp;link||string||
|&emsp;&emsp;startTime||string(date-time)||
|&emsp;&emsp;endTime||string(date-time)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;priority||integer(int32)||
|&emsp;&emsp;startTimeFormatString||string||
|&emsp;&emsp;endTimeFormatString||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": [
		{
			"id": 0,
			"name": "",
			"spaceId": 0,
			"keyword": "",
			"htmlContent": "",
			"text": "",
			"img": "",
			"link": "",
			"startTime": "",
			"endTime": "",
			"createTime": "",
			"updateTime": "",
			"status": 0,
			"priority": 0,
			"startTimeFormatString": "",
			"endTimeFormatString": ""
		}
	]
}
```


## 获取所有的广告位及其对应的广告


**接口地址**:`/front/ad/getAllAds`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|spaceKeys|spaceKeys|query|true|array|string|
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO«List«PromotionSpaceDTO»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||array|PromotionSpaceDTO|
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;name||string||
|&emsp;&emsp;spaceKey||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;isDel||integer(int32)||
|&emsp;&emsp;adDTOList||array|PromotionAdDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;spaceId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;keyword|||false|string||
|&emsp;&emsp;&emsp;&emsp;htmlContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;text|||false|string||
|&emsp;&emsp;&emsp;&emsp;img|||false|string||
|&emsp;&emsp;&emsp;&emsp;link|||false|string||
|&emsp;&emsp;&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;priority|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;startTimeFormatString|||false|string||
|&emsp;&emsp;&emsp;&emsp;endTimeFormatString|||false|string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": [
		{
			"id": 0,
			"name": "",
			"spaceKey": "",
			"createTime": "",
			"updateTime": "",
			"isDel": 0,
			"adDTOList": [
				{
					"id": 0,
					"name": "",
					"spaceId": 0,
					"keyword": "",
					"htmlContent": "",
					"text": "",
					"img": "",
					"link": "",
					"startTime": "",
					"endTime": "",
					"createTime": "",
					"updateTime": "",
					"status": 0,
					"priority": 0,
					"startTimeFormatString": "",
					"endTimeFormatString": ""
				}
			]
		}
	]
}
```


## 新增或者修改广告信息


**接口地址**:`/front/ad/saveOrUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"name": "",
	"spaceId": 0,
	"keyword": "",
	"htmlContent": "",
	"text": "",
	"img": "",
	"link": "",
	"startTime": "",
	"endTime": "",
	"createTime": "",
	"updateTime": "",
	"status": 0,
	"priority": 0,
	"startTimeFormatString": "",
	"endTimeFormatString": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|promotionAdDTO|promotionAdDTO|body|true|PromotionAdDTO|PromotionAdDTO|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;name|||false|string||
|&emsp;&emsp;spaceId|||false|integer(int32)||
|&emsp;&emsp;keyword|||false|string||
|&emsp;&emsp;htmlContent|||false|string||
|&emsp;&emsp;text|||false|string||
|&emsp;&emsp;img|||false|string||
|&emsp;&emsp;link|||false|string||
|&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;priority|||false|integer(int32)||
|&emsp;&emsp;startTimeFormatString|||false|string||
|&emsp;&emsp;endTimeFormatString|||false|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 获取所有的广告位


**接口地址**:`/front/ad/space/getAllSpaces`


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
|200|OK|ResponseDTO«List«PromotionSpaceDTO»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||array|PromotionSpaceDTO|
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;name||string||
|&emsp;&emsp;spaceKey||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;isDel||integer(int32)||
|&emsp;&emsp;adDTOList||array|PromotionAdDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;spaceId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;keyword|||false|string||
|&emsp;&emsp;&emsp;&emsp;htmlContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;text|||false|string||
|&emsp;&emsp;&emsp;&emsp;img|||false|string||
|&emsp;&emsp;&emsp;&emsp;link|||false|string||
|&emsp;&emsp;&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;priority|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;startTimeFormatString|||false|string||
|&emsp;&emsp;&emsp;&emsp;endTimeFormatString|||false|string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": [
		{
			"id": 0,
			"name": "",
			"spaceKey": "",
			"createTime": "",
			"updateTime": "",
			"isDel": 0,
			"adDTOList": [
				{
					"id": 0,
					"name": "",
					"spaceId": 0,
					"keyword": "",
					"htmlContent": "",
					"text": "",
					"img": "",
					"link": "",
					"startTime": "",
					"endTime": "",
					"createTime": "",
					"updateTime": "",
					"status": 0,
					"priority": 0,
					"startTimeFormatString": "",
					"endTimeFormatString": ""
				}
			]
		}
	]
}
```


## 根据Id获取广告位


**接口地址**:`/front/ad/space/getSpaceById`


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
|200|OK|ResponseDTO«PromotionSpaceDTO»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||PromotionSpaceDTO|PromotionSpaceDTO|
|&emsp;&emsp;id||integer(int32)||
|&emsp;&emsp;name||string||
|&emsp;&emsp;spaceKey||string||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;isDel||integer(int32)||
|&emsp;&emsp;adDTOList||array|PromotionAdDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;spaceId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;keyword|||false|string||
|&emsp;&emsp;&emsp;&emsp;htmlContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;text|||false|string||
|&emsp;&emsp;&emsp;&emsp;img|||false|string||
|&emsp;&emsp;&emsp;&emsp;link|||false|string||
|&emsp;&emsp;&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;priority|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;startTimeFormatString|||false|string||
|&emsp;&emsp;&emsp;&emsp;endTimeFormatString|||false|string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"id": 0,
		"name": "",
		"spaceKey": "",
		"createTime": "",
		"updateTime": "",
		"isDel": 0,
		"adDTOList": [
			{
				"id": 0,
				"name": "",
				"spaceId": 0,
				"keyword": "",
				"htmlContent": "",
				"text": "",
				"img": "",
				"link": "",
				"startTime": "",
				"endTime": "",
				"createTime": "",
				"updateTime": "",
				"status": 0,
				"priority": 0,
				"startTimeFormatString": "",
				"endTimeFormatString": ""
			}
		]
	}
}
```


## 新增或者修改广告位


**接口地址**:`/front/ad/space/saveOrUpdate`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"name": "",
	"spaceKey": "",
	"createTime": "",
	"updateTime": "",
	"isDel": 0,
	"adDTOList": [
		{
			"id": 0,
			"name": "",
			"spaceId": 0,
			"keyword": "",
			"htmlContent": "",
			"text": "",
			"img": "",
			"link": "",
			"startTime": "",
			"endTime": "",
			"createTime": "",
			"updateTime": "",
			"status": 0,
			"priority": 0,
			"startTimeFormatString": "",
			"endTimeFormatString": ""
		}
	]
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|promotionSpaceDTO|promotionSpaceDTO|body|true|PromotionSpaceDTO|PromotionSpaceDTO|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;name|||false|string||
|&emsp;&emsp;spaceKey|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;isDel|||false|integer(int32)||
|&emsp;&emsp;adDTOList|||false|array|PromotionAdDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;name|||false|string||
|&emsp;&emsp;&emsp;&emsp;spaceId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;keyword|||false|string||
|&emsp;&emsp;&emsp;&emsp;htmlContent|||false|string||
|&emsp;&emsp;&emsp;&emsp;text|||false|string||
|&emsp;&emsp;&emsp;&emsp;img|||false|string||
|&emsp;&emsp;&emsp;&emsp;link|||false|string||
|&emsp;&emsp;&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;priority|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;startTimeFormatString|||false|string||
|&emsp;&emsp;&emsp;&emsp;endTimeFormatString|||false|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 更新广告的状态


**接口地址**:`/front/ad/updateStatus`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|id|广告Id|body|false|integer||
|status|状态: 0-下架,1-上架|body|false|integer||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


# 微信接口


## 微信绑定--跳转到扫码页面


**接口地址**:`/front/weixin/bind`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:微信绑定--跳转到扫码页面


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 微信绑定--授权回调


**接口地址**:`/front/weixin/callback`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:微信绑定--授权回调


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|code|code|query|true|string||
|Authorization|公共参数, access_token|header|false|string||
|isBind|isBind|query|false|boolean||
|uid|uid|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 微信扫码登录


**接口地址**:`/front/weixin/login`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:微信扫码登录


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 微信解绑


**接口地址**:`/front/weixin/unBind`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:微信解绑


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


# 微信验证接口


## 验证消息


**接口地址**:`/front/weixin/check/signature`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:验证消息


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|nonce|nonce|query|true|string||
|signature|signature|query|true|string||
|timestamp|timestamp|query|true|string||
|Authorization|公共参数, access_token|header|false|string||
|echostr|echostr|query|false|string||
|encrypt_type|encrypt_type|query|false|string||
|msg_signature|msg_signature|query|false|string||
|requestBody|requestBody|body|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 支付接口


## 获取支付方式


**接口地址**:`/front/pay/getPayInfo`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|shopOrderNo|shopOrderNo|query|true|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO«PayInfoVo»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||PayInfoVo|PayInfoVo|
|&emsp;&emsp;price|价格, 单位元|number||
|&emsp;&emsp;supportChannels|当前订单支持的支付渠道信息|array|OrderSupportChannel|
|&emsp;&emsp;&emsp;&emsp;channelCode|渠道码: 1:微信, 2:支付宝支付||false|integer(int32)||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"price": 0,
		"supportChannels": [
			{
				"channelCode": 0
			}
		]
	}
}
```


## 查询订单(支付结果)


**接口地址**:`/front/pay/getPayResult`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|orderNo|orderNo|query|true|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO«OrderVo»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||OrderVo|OrderVo|
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;productId|商品唯一标识|integer(int32)||
|&emsp;&emsp;amount|付款金额，单位为分|number(double)||
|&emsp;&emsp;currency|货币类型，cny-人民币 gbeans-勾豆|string||
|&emsp;&emsp;channel|支付渠道：weChat-微信支付，aliPay-支付宝支付,applePay-苹果支付|string||
|&emsp;&emsp;status|订单状态：1-未支付 2-支付成功 3-支付失败|integer(int32)||
|&emsp;&emsp;orderType|类型 1-购买课程 2-充值|integer(int32)||
|&emsp;&emsp;source|支付来源 1-app 2-h5 3-pc|integer(int32)||
|&emsp;&emsp;payTime|支付时间|string(date-time)||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"orderNo": "",
		"productId": 0,
		"amount": 0,
		"currency": "",
		"channel": "",
		"status": 0,
		"orderType": 0,
		"source": 0,
		"payTime": ""
	}
}
```


## 创建订单(发起支付)


**接口地址**:`/front/pay/saveOrder`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"goodsOrderNo": "",
	"channel": "",
	"returnUrl": "",
	"wxType": 0,
	"source": "",
	"userid": 0,
	"clientIp": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reqVo|reqVo|body|true|PayReqVo|PayReqVo|
|&emsp;&emsp;goodsOrderNo|商品订单编号||false|string||
|&emsp;&emsp;channel|渠道(weChat-微信支付，aliPay-支付宝支付)||false|string||
|&emsp;&emsp;returnUrl|h5支付成功回调地址||false|string||
|&emsp;&emsp;wxType|如果是从微信浏览器过来的话，则使用该参数来获取真正的openId参数||false|integer(int32)||
|&emsp;&emsp;source|可用值:APP,APP_IOS,APP_ANDROID,H5,PC,JSAPI||false|string||
|&emsp;&emsp;userid|||false|integer(int32)||
|&emsp;&emsp;clientIp|||false|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO«PayResVo»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||PayResVo|PayResVo|
|&emsp;&emsp;orderNo|订单号|string||
|&emsp;&emsp;channel|渠道 weChat-微信支付，aliPay-支付宝支付|string||
|&emsp;&emsp;source|来源 1-app 2-h5 3-pc 4-jsapi 5-app-ios 6-app-android|integer(int32)||
|&emsp;&emsp;payUrl|支付所需字符串|string||
|&emsp;&emsp;status|订单状态：1-未支付 2-支付成功 3-支付失败|integer(int32)||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"orderNo": "",
		"channel": "",
		"source": 0,
		"payUrl": "",
		"status": 0
	}
}
```


## 微信支付回调


**接口地址**:`/front/pay/wxCallback`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 支付宝支付回调


**接口地址**:`/front/pay/zfbCallback`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 消息通知接口


## 查询消息通知列表


**接口地址**:`/front/message/getMessageList`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"page": 0,
	"userId": 0,
	"from": 0,
	"rows": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|param|通知消息查询对象|body|true|MessageQueryVo|MessageQueryVo|
|&emsp;&emsp;page|页数||false|integer(int32)||
|&emsp;&emsp;userId|||false|integer(int32)||
|&emsp;&emsp;from|开始记录数||false|integer(int32)||
|&emsp;&emsp;rows|查询条数 默认10||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO«分页数据结果集 VO«MessageVo»»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||分页数据结果集 VO«MessageVo»|分页数据结果集 VO«MessageVo»|
|&emsp;&emsp;total|总记录数|integer(int64)||
|&emsp;&emsp;totalPages|总页数数|integer(int64)||
|&emsp;&emsp;currentPage|总页数数|integer(int64)||
|&emsp;&emsp;rows|本页数据记录|array|MessageVo|
|&emsp;&emsp;&emsp;&emsp;id|id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;userId|用户id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseName|课程名称||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseLessonId|课时id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;theme|课时主题||false|string||
|&emsp;&emsp;&emsp;&emsp;hasRead|是否读取  0未读 1已读||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"total": 0,
		"totalPages": 0,
		"currentPage": 0,
		"rows": [
			{
				"id": 0,
				"userId": 0,
				"courseId": 0,
				"courseName": 0,
				"courseLessonId": 0,
				"theme": "",
				"hasRead": 0,
				"remark": "",
				"createTime": "",
				"updateTime": ""
			}
		]
	}
}
```


## 获取用户未读消息标识


**接口地址**:`/front/message/getUnReadMessage`


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
|200|OK|ResponseDTO«boolean»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||boolean||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": true
}
```


## 更新消息已读


**接口地址**:`/front/message/updateReadStatus`


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
|200|OK|ResponseDTO«boolean»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||boolean||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": true
}
```


# 用户接口


## 用户基本信息


**接口地址**:`/front/user/getInfo`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*,application/json`


**接口描述**:获取用户基本信息


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|1|success||
|200|OK|ResponseDTO«Map«string,object»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||
|-1|login fail||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 用户登录


**接口地址**:`/front/user/login`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:用户登录, 未注册用户会自动注册并登录


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|phone|手机号|body|true|string||
|Authorization|公共参数, access_token|header|false|string||
|code|验证码|body|false|string||
|password|密码|body|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|1|success||
|200|OK|ResponseDTO«string»|
|201|非法的手机号|ResponseDTO«string»|
|202|密码或者验证码为空|ResponseDTO«string»|
|203|验证码错误|ResponseDTO«string»|
|204|验证码过期|ResponseDTO«string»|
|205|手机号或者密码错误|ResponseDTO«string»|
|206|登录失败|ResponseDTO«string»|
|207|验证码错误|ResponseDTO«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||
|-1|login fail||


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-201**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-202**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-203**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-204**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-205**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-206**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-207**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


## 用户退出


**接口地址**:`/front/user/logout`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:用户退出


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|1|success||
|200|OK|ResponseDTO«string»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


## 刷新token


**接口地址**:`/front/user/refresh_token`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:根据refresh_token重新获取access_token


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|refreshtoken|refreshtoken|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|1|success||
|200|OK|ResponseDTO«string»|
|201|refresh_token为空|ResponseDTO«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||
|-1|login fail||


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-201**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


## 设置用户密码


**接口地址**:`/front/user/setPassword`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:设置用户密码


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|configPassword|确认密码|body|false|string||
|password|用户密码|body|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|1|success||
|200|OK|ResponseDTO«string»|
|201|非法的密码|ResponseDTO«string»|
|202|非法的确认密码|ResponseDTO«string»|
|203|两次输入的密码不一致|ResponseDTO«string»|
|204|用户设置密码失败|ResponseDTO«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||
|-1|login fail||


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-201**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-202**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-203**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-204**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


## 更新用户基本信息


**接口地址**:`/front/user/updateInfo`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:更新用户基本信息


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|portrait|用户头像URL|body|false|string||
|userName|用户昵称|body|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|1|success||
|200|OK|ResponseDTO«Map«string,object»»|
|201|非法的用户昵称|ResponseDTO«Map«string,object»»|
|202|非法的用户头像|ResponseDTO«Map«string,object»»|
|203|用户信息更新失败|ResponseDTO«Map«string,object»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||
|-1|login fail||


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


**响应状态码-201**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


**响应状态码-202**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


**响应状态码-203**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 更新用户密码


**接口地址**:`/front/user/updatePassword`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:更新用户密码


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|configPassword|确认密码|body|false|string||
|newPassword|用户新密码|body|false|string||
|oldPassword|用户旧密码|body|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|1|success||
|200|OK|ResponseDTO«string»|
|201|非法的密码|ResponseDTO«string»|
|202|非法的确认密码|ResponseDTO«string»|
|203|两次输入的密码不一致|ResponseDTO«string»|
|204|非法的旧密码|ResponseDTO«string»|
|205|用户设置密码失败|ResponseDTO«string»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||
|-1|login fail||


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-201**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-202**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-203**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-204**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


**响应状态码-205**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": ""
}
```


# 订单接口


## 创建商品订单


**接口地址**:`/front/order/saveOrder`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"goodsId": 0,
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|reqVo|创建商品订单请求|body|true|CreateShopGoodsOrderReqVo|CreateShopGoodsOrderReqVo|
|&emsp;&emsp;goodsId|在售商品ID||false|integer(int32)||
|&emsp;&emsp;userId|||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO«CreateShopGoodsOrderResVo»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||CreateShopGoodsOrderResVo|CreateShopGoodsOrderResVo|
|&emsp;&emsp;orderNo|商品订单号|string||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {
		"orderNo": ""
	}
}
```


# 评论


## 取消点赞


**接口地址**:`/front/comment/cancelFavorite`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|commentId|commentId|query|true|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 删除评论


**接口地址**:`/front/comment/deleteCourseComment`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|commentId|commentId|query|true|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 点赞


**接口地址**:`/front/comment/favorite`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|commentId|commentId|query|true|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 获取评论列表


**接口地址**:`/front/comment/getCourseCommentList`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"userId": 0,
	"courseId": 0,
	"pageNum": 0,
	"pageSize": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|courseCommentParam|courseCommentParam|body|true|CourseCommentParam|CourseCommentParam|
|&emsp;&emsp;userId|||false|integer(int32)||
|&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;pageNum|||false|integer(int32)||
|&emsp;&emsp;pageSize|||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 保存评论


**接口地址**:`/front/comment/saveCourseComment`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"courseId": 0,
	"comment": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|commentReq|commentReq|body|true|课程评论|课程评论|
|&emsp;&emsp;courseId|课程Id||false|integer(int32)||
|&emsp;&emsp;comment|课程评论||false|string||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


# 课程媒体接口


## 获取阿里播放key


**接口地址**:`/front/course/media/alikey`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|code|code|query|false|string||
|vid|vid|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 通过课时ID获取媒体信息


**接口地址**:`/front/course/media/getByLessonId`


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
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 根据fileId获取阿里云对应的视频播放信息


**接口地址**:`/front/course/media/videoPlayInfo`


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
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


# 课程接口


## 获取选课内容


**接口地址**:`/front/course/getAllCourse`


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
|200|OK|ResponseDTO«List«课程返回数据»»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||array|课程返回数据|
|&emsp;&emsp;id|课程ID|integer(int32)||
|&emsp;&emsp;courseName|课程名|string||
|&emsp;&emsp;brief|课程一句话简介|string||
|&emsp;&emsp;teacherId|讲师id|integer(int32)||
|&emsp;&emsp;totalCourseTime|课时数|integer(int32)||
|&emsp;&emsp;sales|显示销量|integer(int32)||
|&emsp;&emsp;actualSales|真实销量|integer(int32)||
|&emsp;&emsp;price|原价|number(double)||
|&emsp;&emsp;priceTag|原价标签|string||
|&emsp;&emsp;discounts|优惠价|number(double)||
|&emsp;&emsp;discountsTag|优惠标签|string||
|&emsp;&emsp;courseDescription|课程描述|string||
|&emsp;&emsp;courseImgUrl|课程分享图片url|string||
|&emsp;&emsp;courseListImg|课程列表图片|string||
|&emsp;&emsp;isNew|是否新品|boolean||
|&emsp;&emsp;isNewDes|广告语|string||
|&emsp;&emsp;lastOperatorId|最后操作者|integer(int32)||
|&emsp;&emsp;createTime|记录创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;totalDuration|总时长(分钟)|integer(int32)||
|&emsp;&emsp;shareTitle|分享title|string||
|&emsp;&emsp;shareDescription|分享描述|string||
|&emsp;&emsp;shareImageTitle|分享图title|string||
|&emsp;&emsp;status|课程状态，0-草稿，1-上架|integer(int32)||
|&emsp;&emsp;sortNum|课程排序，用于后台保存草稿时用到|integer(int32)||
|&emsp;&emsp;lastNoticeTime|最后课程最近通知时间|string(date-time)||
|&emsp;&emsp;previewFirstField|课程预览第一个字段|string||
|&emsp;&emsp;previewSecondField|课程预览第二个字段|string||
|&emsp;&emsp;distributionPosterImage|分销海报图片URL|string||
|&emsp;&emsp;sectionDTOS|课程中关模块|array|SectionDTO|
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
|&emsp;&emsp;teacherDTO|讲师|TeacherDTO|TeacherDTO|
|&emsp;&emsp;&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;courseId|||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;teacherName|||false|string||
|&emsp;&emsp;&emsp;&emsp;teacherHeadPicUrl|||false|string||
|&emsp;&emsp;&emsp;&emsp;position|||false|string||
|&emsp;&emsp;&emsp;&emsp;description|||false|string||
|&emsp;&emsp;courseUrl|播放地址|string||
|&emsp;&emsp;topNCourseLesson|课时列表|array|LessonDTO|
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
|&emsp;&emsp;isBuy|是否购买|boolean||
|&emsp;&emsp;lessonUpdateCount|课程更新数量|integer(int32)||
|&emsp;&emsp;compareTime|待比较时间  最近播放时间|string(date-time)||
|&emsp;&emsp;lastLearnLessonName|最后学习的课时名称|string||
|&emsp;&emsp;activityCourse|课程是否做秒杀活动 true是 false不是|boolean||
|&emsp;&emsp;activityTime|倒计时 课程活动倒计时 单位毫秒|integer(int64)||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": [
		{
			"id": 0,
			"courseName": "",
			"brief": "",
			"teacherId": 0,
			"totalCourseTime": 0,
			"sales": 0,
			"actualSales": 0,
			"price": 0,
			"priceTag": "",
			"discounts": 0,
			"discountsTag": "",
			"courseDescription": "",
			"courseImgUrl": "",
			"courseListImg": "",
			"isNew": true,
			"isNewDes": "",
			"lastOperatorId": 0,
			"createTime": "",
			"updateTime": "",
			"totalDuration": 0,
			"shareTitle": "",
			"shareDescription": "",
			"shareImageTitle": "",
			"status": 0,
			"sortNum": 0,
			"lastNoticeTime": "",
			"previewFirstField": "",
			"previewSecondField": "",
			"distributionPosterImage": "",
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
				{}
			],
			"isBuy": true,
			"lessonUpdateCount": 0,
			"compareTime": "",
			"lastLearnLessonName": "",
			"activityCourse": true,
			"activityTime": 0
		}
	]
}
```


## 获取课程详情


**接口地址**:`/front/course/getCourseById`


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
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 获取已购课程


**接口地址**:`/front/course/getPurchaseCourse`


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
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 分页查询


**接口地址**:`/front/course/getQueryCourses`


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
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


# 课程播放历史接口


## 获取课程播放节点


**接口地址**:`/front/course/historyNode/getByLessonId`


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
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 保存历史节点


**接口地址**:`/front/course/historyNode/saveCourseHistoryNode`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"userId": 0,
	"courseId": 0,
	"sectionId": 0,
	"lessonId": 0,
	"historyNode": 0,
	"historyHighestNode": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|coursePlayHistoryReq|coursePlayHistoryReq|body|true|课程播放历史|课程播放历史|
|&emsp;&emsp;userId|用户id||false|integer(int32)||
|&emsp;&emsp;courseId|课程id||false|integer(int32)||
|&emsp;&emsp;sectionId|章节id||false|integer(int32)||
|&emsp;&emsp;lessonId|课时id||false|integer(int32)||
|&emsp;&emsp;historyNode|历史播放节点(s)||false|integer(int32)||
|&emsp;&emsp;historyHighestNode|最高历史播放节点||false|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


# 课程章节接口


## 获取课程章节


**接口地址**:`/front/course/session/getSectionAndLesson`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*,application/json`


**接口描述**:获取课程章节接口


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|courseId|courseId|query|true|integer(int32)||
|Authorization|公共参数, access_token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


# 验证码接口


## 判断验证码


**接口地址**:`/front/user/vfcode/checkCode`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:判断验证码是否正确接口


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|code|验证码|body|false|string||
|telephone|电话号码|body|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```


## 发送验证码


**接口地址**:`/front/user/vfcode/sendCode`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*,application/json`


**接口描述**:发送验证码接口


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|Authorization|公共参数, access_token|header|false|string||
|telephone|电话号码|body|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|ResponseDTO|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|success||boolean||
|state||integer(int32)|integer(int32)|
|message||string||
|content||object||


**响应示例**:
```javascript
{
	"success": true,
	"state": 0,
	"message": "",
	"content": {}
}
```