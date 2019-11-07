define({ "api": [
  {
    "type": "get",
    "url": "/address/city",
    "title": "Get List City",
    "version": "0.1.0",
    "name": "GetListCity",
    "group": "Address",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of City.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-08-09T10:35:27.980Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-08-31T02:46:49.864Z\",\n        company_id: \"ROOT\",\n        status: false,\n        delete_id: null,\n        _id: \"5d99546d3fc4f3ba462b0761\",\n        address_name: \"Bắc Ninh\",\n        type: \"C\",\n        parent_id: \"0\",\n        country_id: 243,\n        points: {\n            type: \"Point\",\n            coordinates: [\n                106.109754403924,\n                21.1176402844952\n            ]\n        },\n        code: \"VN_22\",\n        reaction: [ ],\n        old_id: \"10\",\n        name: \"Bắc Ninh\"\n   }\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/province",
    "title": "Get List Province",
    "version": "0.1.0",
    "name": "GetListProvince",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "city_id",
            "description": "<p>City ID Of Province.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"city_id\": \"5d99546d3fc4f3ba462b0761\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-08-09T10:35:29.283Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-08-31T02:51:13.025Z\",\n        company_id: \"ROOT\",\n        status: false,\n        delete_id: null,\n        _id: \"5d99547e3fc4f3ba462b07a0\",\n        type: \"D\",\n        parent_id: \"10\",\n        country_id: 243,\n        points: {\n            type: \"Point\",\n            coordinates: [\n                106.059728972504,\n                21.1740781241828\n            ]\n        },\n        code: \"VN_2201\",\n        reaction: [ ],\n        old_id: \"1392\",\n        city_id: \"5d99546d3fc4f3ba462b0761\",\n        name: \"Bắc Ninh\"\n   }\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "get",
    "url": "/address/ward",
    "title": "Get List Ward",
    "version": "0.1.0",
    "name": "GetListWard",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "province_id",
            "description": "<p>Province ID Of Ward.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"province_id\": \"5d99547e3fc4f3ba462b07a0\"\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-08-09T10:36:01.356Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-08-31T03:11:01.189Z\",\n        company_id: \"ROOT\",\n        status: false,\n        delete_id: null,\n        _id: \"5d9955093fc4f3ba462b0a66\",\n        type: \"W\",\n        parent_id: \"1392\",\n        country_id: 243,\n        points: {\n            type: \"Point\",\n            coordinates: [\n                106.081470120058,\n                21.1702286299397\n            ]\n        },\n        code: \"VN_220101\",\n        reaction: [ ],\n        old_id: \"5083\",\n        province_id: \"5d99547e3fc4f3ba462b07a0\",\n        name: \"Đại Phúc\"\n   }\n   {...},\n   {...},\n   {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./address.js",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/ask/add",
    "title": "Add New Ask",
    "version": "0.1.0",
    "name": "AddNewAsk",
    "group": "Ask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Ask Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Ask Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Ask Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Ask Content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Ask URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Ask Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_name",
            "description": "<p>Asset Rename Ask Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Search Result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Ask Reaction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "approve",
            "description": "<p>Approve Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"status\": true,\n   \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-26T03:24:44.666Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-26T03:24:44.666Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"url_name\": \"\",\n      \"sequence\": 0,\n      \"content\": \"\",\n      \"url_name\": \"\",\n      \"search\": \"tại sao danh sách fsbo của tôi không được đăng? tai sao danh sach fsbo cua toi khong duoc dang\",\n      \"asset_name\": \"\",\n      \"category_id\": \"5d7f313e2c69582d740b7afd\",\n      \"approve\": \"APPROVED\",\n      \"reaction\": [],\n      \"name\": \"Tại sao danh sách FSBO của tôi không được đăng?\",\n      \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask"
  },
  {
    "type": "get",
    "url": "/ask/count",
    "title": "Count Number Of Ask",
    "version": "0.1.0",
    "name": "CountNumberOfAsk",
    "group": "Ask",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Ask.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  17\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask"
  },
  {
    "type": "delete",
    "url": "/ask/delete",
    "title": "Delete Ask",
    "version": "0.1.0",
    "name": "DeleteAsk",
    "group": "Ask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Ask ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9c4fb4302c732d088a8bbe\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask"
  },
  {
    "type": "put",
    "url": "/ask/edit",
    "title": "Edit Ask",
    "version": "0.1.0",
    "name": "EditAsk",
    "group": "Ask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Ask ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9c4fb4302c732d088a8bbe\",\n  \"name\": \"Tại sao danh sách thành viên của tôi không được đăng?\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask"
  },
  {
    "type": "get",
    "url": "/ask/list",
    "title": "Get List Ask",
    "version": "0.1.0",
    "name": "GetListAsk",
    "group": "Ask",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Ask.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: null,\n    create_date: \"2019-10-08T08:58:00.381Z\",\n    write_uid: null,\n    write_date: \"2019-10-08T08:58:00.381Z\",\n    company_id: \"ROOT\",\n    status: true,\n    delete_id: null,\n    category_id: [\n        \"5d7f38d6d76bcb1fe8742476\"\n    ],\n    reaction: [ ],\n    asset_name: \"\",\n    sequence: 0,\n    url_name: \"\",\n    approve: \"PENDING\",\n    _id: \"5d9d35b5a3addc58413a9537\",\n    name: \"Nhà của tôi trên Asset được liệt kê bởi đại lý của tôi. Làm thế nào tôi có thể chỉnh sửa danh sách của tôi?\",\n    __v: 0,\n    content: \"Nếu nhà của bạn được liệt kê thông qua đại lý của bạn, mọi chỉnh sửa hoặc cập nhật sẽ được thực hiện trực tiếp trên nguồn danh sách (MLS hoặc nhà cung cấp dịch vụ môi giới) bởi đại lý của bạn. Những thay đổi đó sau đó sẽ phản ánh trên Asset khi nguồn cấp dữ liệu được làm mới, trong vòng 24 giờ.\",\n    search: \"nhà của tôi trên asset được liệt kê bởi đại lý của tôi. làm thế nào tôi có thể chỉnh sửa danh sách của tôi? nha cua toi tren asset duoc liet ke boi dai ly cua toi lam the nao toi co the chinh sua danh sach cua toi \",\n    category: [\n        {\n            _id: \"5d7f38d6d76bcb1fe8742476\",\n            name: \"Pháp lý BĐS\"\n        }\n    ],\n    id: \"5d9d35b5a3addc58413a9537\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask.js",
    "groupTitle": "Ask"
  },
  {
    "type": "post",
    "url": "/ask/category/add",
    "title": "Add New Ask Category",
    "version": "0.1.0",
    "name": "AddNewAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Ask Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Ask Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Ask Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Ask Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Ask Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Ask Category Sequence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": true,\n  \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-10-11T01:56:35.189Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-10-11T01:56:35.189Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 0,\n      \"name\": \"Pháp lý Bất Động Sản\",\n      \"url_name\": \"phap-ly-bat-dong-san\",\n      \"code\": \"ASK_LEGAL\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/category/count",
    "title": "Count Number Of Ask Category",
    "version": "0.1.0",
    "name": "CountNumberOfAskCategory",
    "group": "Ask_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Ask Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "delete",
    "url": "/ask/category/delete",
    "title": "Delete Ask Category",
    "version": "0.1.0",
    "name": "DeleteAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Ask Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d7f38d6d76bcb1fe8742476\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/category/detail",
    "title": "Ask Category Detail",
    "version": "0.1.0",
    "name": "DetailAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Ask Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d7f38d6d76bcb1fe8742476\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n    _id: \"5d7f38d6d76bcb1fe8742476\",\n    parent_id: null,\n    name: \"Pháp lý BĐS\",\n    code: \"ASK_LEGAL\",\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    sequence: 2,\n    __v: 0,\n    status: true,\n    url_name: \"phap-ly-bds\",\n    children: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "put",
    "url": "/ask/category/edit",
    "title": "Edit Ask Category",
    "version": "0.1.0",
    "name": "EditAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Ask Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ask Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d970e9203ca2d152823edcd\",\n  \"name\": \"Danh Sách Khách hàng của Asset năm 2019\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/category/list",
    "title": "Get List Ask Category",
    "version": "0.1.0",
    "name": "GetListAskCategory",
    "group": "Ask_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     create_uid: \"5d679819325ab70ab0157ce5\",\n     create_date: \"2019-10-14T07:37:15.584Z\",\n     write_uid: null,\n     write_date: null,\n     company_id: \"ROOT\",\n     status: true,\n     delete_id: null,\n     parent_id: null,\n     sequence: 2,\n     _id: \"5d7f38d6d76bcb1fe8742476\",\n     name: \"Pháp lý BĐS\",\n     code: \"ASK_LEGAL\",\n     __v: 0,\n     url_name: \"phap-ly-bds\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "get",
    "url": "/ask/category/list_tree",
    "title": "Get List Tree Of Ask Category",
    "version": "0.1.0",
    "name": "GetListTreeOfAskCategory",
    "group": "Ask_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Ask Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": " [  \n    {\n      _id: \"5d7f38d6d76bcb1fe8742476\",\n      parent_id: null,\n      name: \"Pháp lý BĐS\",\n      code: \"ASK_LEGAL\",\n      create_uid: \"5d679819325ab70ab0157ce5\",\n      sequence: 2,\n      __v: 0,\n      status: true,\n      url_name: \"phap-ly-bds\",\n      children: [ ]\n    },\n   {}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./ask_category.js",
    "groupTitle": "Ask_Category"
  },
  {
    "type": "post",
    "url": "/res_attribute/add",
    "title": "Add New Attribute",
    "version": "0.1.0",
    "name": "AddNewAttribute",
    "group": "Attribute",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Attribute Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Attribute Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Attribute Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Attribute Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Attribute Sequence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     create_date: \"2019-08-28T16:17:38.841Z\",\n     _id: \"5d66a92630572a3adcb53e2c\",\n     name: \"Diện tích\",\n     code: \"area\",\n     __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./res_attribute.js",
    "groupTitle": "Attribute"
  },
  {
    "type": "get",
    "url": "/res_attribute/list",
    "title": "Get List Attribute",
    "version": "0.1.0",
    "name": "GetListAttribute",
    "group": "Attribute",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Attribute.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        create_date: \"2019-08-28T16:17:38.841Z\",\n        _id: \"5d66a92630572a3adcb53e2c\",\n        name: \"Diện tích\",\n        code: \"area\",\n        __v: 0\n    },\n    {\n        create_date: \"2019-08-28T16:17:38.841Z\",\n        _id: \"5d66a92630572a3adcb53e2d\",\n        name: \"Hướng\",\n        code: \"Direction\",\n        __v: 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./res_attribute.js",
    "groupTitle": "Attribute"
  },
  {
    "type": "get",
    "url": "/auth/authenticate",
    "title": "Check Authenticate",
    "version": "0.1.0",
    "name": "CheckAuthenticate",
    "group": "Authenticate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Authenticate Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Authenticate Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\":true,\n  \"message\":\"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\":false,\n  \"message\":\"Không thể tìm thấy token\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\":false,\n  \"message\":\"Token không hợp lệ\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "Logout",
    "version": "0.1.0",
    "name": "Logout",
    "group": "Authenticate",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isLogin\":false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Windows_10_Documents_GitHub_Asset_Admin_APIDocs_doc_main_js",
    "groupTitle": "C__Users_Windows_10_Documents_GitHub_Asset_Admin_APIDocs_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/comment/add",
    "title": "Add New Comment",
    "version": "0.1.0",
    "name": "AddNewComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Comment Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Comment Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Comment Title.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Comment Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "children",
            "description": "<p>Comment Children.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Comment Path.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "rel_id",
            "description": "<p>Comment Rely Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rel_id_string",
            "description": "<p>Comment Rely ID String.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9fe198ec7cab08bcbbab45\"),\n     \"create_uid\" : ObjectId(\"5d9c378d3c34df0f449f5ac3\"),\n     \"create_date\" : ISODate(\"2019-10-11T01:57:44.524Z\"),\n     \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"write_date\" : ISODate(\"2019-10-10T06:54:20.514Z\"),\n     \"company_id\" : \"ROOT\",\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"reaction\" : [],\n     \"parent_id\" : ObjectId(\"5d9fe0e8ec7cab08bcbbab3d\"),\n     \"children\" : [],\n     \"rel_id\" : ObjectId(\"5d789b9da31d1828c0c10dd0\"),\n     \"title\" : \"dsd\",\n     \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Comment Reaction.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/count_by_id",
    "title": "Count Number Of Comment By ID",
    "version": "0.1.0",
    "name": "CountNumberOfComment",
    "group": "Comment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n    status: true,\n    data: 20\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/list",
    "title": "Get List Comment",
    "version": "0.1.0",
    "name": "GetListComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    _id: \"5d9fddf606816b2e80f298e9\",\n    create_date: \"2019-10-11T01:42:14.168Z\",\n    reaction: [ ],\n    parent_id: null,\n    children: [ ],\n    rel_id: \"5d9d304fa3addc58413349bf\",\n    title: \"asdasd\" \n}",
          "type": "json"
        }
      ]
    },
    "filename": "./comment.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/company/add",
    "title": "Add New Company",
    "version": "0.1.0",
    "name": "AddNewCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Company Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Company Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Company Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Company Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Company Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Company Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Company Icon.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Company Partner ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Company Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Company Keyword.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "points",
            "description": "<p>Company Points.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9ae33a6c872036a4b2d47f\"),\n     \"name\" : \"Asset\",\n     \"category_id\" : null,\n     \"display_name\" : \"Assetvn\",\n     \"parent_id\" : null,\n     \"phone\" : \"213213\",\n     \"email\" : \"nguyenvu@asf.com\",\n     \"address\" : \"Vung tau\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>Company Logo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./company.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/company/edit",
    "title": "Edit Company",
    "version": "0.1.0",
    "name": "EditCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Company ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9ae33a6c872036a4b2d47f\",\n  \"name\": \"Công ty cổ phần đầu tư Asset Holdings\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./company.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/company/list",
    "title": "Get List Company",
    "version": "0.1.0",
    "name": "GetListCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Company.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-22T08:52:57.983Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-22T08:52:57.983Z\",\n    company_id: \"ROOT\",\n    status: true,\n    delete_id: null,\n    description: \"\",\n    sequence: 0,\n    icon: \"\",\n    logo: \"\",\n    keyword: \"\",\n    points: {\n        type: \"Point\",\n        coordinates: [\n            0,\n            0\n        ]\n    },\n    _id: \"5d9ae33a6c872036a4b2d47f\",\n    name: \"Asset\",\n    category_id: null,\n    display_name: \"Assetvn\",\n    parent_id: null,\n    phone: \"213213\",\n    email: \"nguyenvu@asf.com\",\n    address: \"Vung tau\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./company.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/company/category/add",
    "title": "Add New Company Category",
    "version": "0.1.0",
    "name": "AddNewCompanyCategory",
    "group": "Company_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Company Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Company Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Company Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Company Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Company Category Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Company Category Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Company Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Company Category Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Company Category Keyword.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"_id\" : ObjectId(\"5dafd01513818c28e0916314\"),\n    \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"create_date\" : ISODate(\"2019-10-23T03:56:36.202Z\"),\n    \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"write_date\" : ISODate(\"2019-10-23T03:56:36.202Z\"),\n    \"company_id\" : \"ROOT\",\n    \"status\" : true,\n    \"delete_id\" : null,\n    \"description\" : \"\",\n    \"keyword\" : \"\",\n    \"code\" : \"US\",\n    \"name\" : \"Cộng tác viên\",\n    \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./company_category.js",
    "groupTitle": "Company_Category"
  },
  {
    "type": "get",
    "url": "/company/category/count",
    "title": "Count Number Of Company Category",
    "version": "0.1.0",
    "name": "CountNumberOfCompanyCategory",
    "group": "Company_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Company Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  10\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./company_category.js",
    "groupTitle": "Company_Category"
  },
  {
    "type": "delete",
    "url": "/company/category/delete",
    "title": "Delete Company Category",
    "version": "0.1.0",
    "name": "DeleteCompanyCategory",
    "group": "Company_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Company Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5dafd01513818c28e0916314\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./company_category.js",
    "groupTitle": "Company_Category"
  },
  {
    "type": "get",
    "url": "/company/category/detail",
    "title": "Company Category Detail",
    "version": "0.1.0",
    "name": "DetailCompanyCategory",
    "group": "Company_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Company Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5dafd01513818c28e0916317\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n     _id: \"5dafd01513818c28e0916317\",\n     create_uid: \"5d679819325ab70ab0157ce5\",\n     create_date: \"2019-10-23T03:56:36.202Z\",\n     write_uid: \"5d679819325ab70ab0157ce5\",\n     write_date: \"2019-10-23T03:56:36.202Z\",\n     company_id: \"ROOT\",\n     status: true,\n     delete_id: null,\n     description: \"\",\n     keyword: \"\",\n     code: \"AOZ\",\n     name: \"Đại lý độc quyền\",\n     __v: 0,\n     children: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingCompanyCategoryID",
            "description": "<p>The <code>id</code> of the Company Category was missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Missing company category ID\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./company_category.js",
    "groupTitle": "Company_Category"
  },
  {
    "type": "put",
    "url": "/company/category/edit",
    "title": "Edit Company Category",
    "version": "0.1.0",
    "name": "EditCompanyCategory",
    "group": "Company_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Company Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Company Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5dafd01513818c28e0916314\",\n  \"name\": \"Cộng tác viên\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdIsNull",
            "description": "<p>The <code>id</code> of the Company Category was null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ID is null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./company_category.js",
    "groupTitle": "Company_Category"
  },
  {
    "type": "get",
    "url": "/company/category/list",
    "title": "Get List Company Category",
    "version": "0.1.0",
    "name": "GetListCompanyCategory",
    "group": "Company_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-23T03:56:36.202Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-23T03:56:36.202Z\",\n    company_id: \"ROOT\",\n    status: true,\n    delete_id: null,\n    description: \"\",\n    keyword: \"\",\n    _id: \"5dafd01513818c28e0916314\",\n    code: \"US\",\n    name: \"Cộng tác viên\",\n    __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./company_category.js",
    "groupTitle": "Company_Category"
  },
  {
    "type": "get",
    "url": "/company/category/list_tree",
    "title": "Get List Tree Of Company Category",
    "version": "0.1.0",
    "name": "GetListTreeOfCompanyCategory",
    "group": "Company_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Company Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[  \n   {\n        _id: \"5dafd01513818c28e0916314\",\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-10-23T03:56:36.202Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-10-23T03:56:36.202Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        description: \"\",\n        keyword: \"\",\n        code: \"US\",\n        name: \"Cộng tác viên\",\n        __v: 0,\n        children: [ ]\n  }\n  {...},\n  {...},\n  {...} \n]",
          "type": "json"
        }
      ]
    },
    "filename": "./company_category.js",
    "groupTitle": "Company_Category"
  },
  {
    "type": "post",
    "url": "/file/creare_folder",
    "title": "Create Folder",
    "version": "0.1.0",
    "name": "CreateFolder",
    "group": "File",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TypeIsNotValid",
            "description": "<p>The <code>type</code> of File is not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ExistSync",
            "description": "<p>The <code>folder</code> was existed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"type is not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Thư mục đã tồn tại\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"message\": \"Tạo mới thành công\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./file.js",
    "groupTitle": "File"
  },
  {
    "type": "delete",
    "url": "/file/delete_folder",
    "title": "Delete Folder",
    "version": "0.1.0",
    "name": "DeleteFolder",
    "group": "File",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CannotDeleteRootFolder",
            "description": "<p>The <code>root folder</code> can not be deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Không thể xóa thư mục gốc (images)\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"message\": \"Xóa thành công\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./file.js",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/file/list",
    "title": "Get List File",
    "version": "0.1.0",
    "name": "GetListFile",
    "group": "File",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of File.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    \"/documents\",\n    \"/images\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./file.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/upload",
    "title": "Upload Image",
    "version": "0.1.0",
    "name": "UploadImage",
    "group": "File",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./file.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/file/upload_resource",
    "title": "Upload File",
    "version": "0.1.0",
    "name": "UploadResource",
    "group": "File",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./file.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/guide/add",
    "title": "Add New Guide",
    "version": "0.1.0",
    "name": "AddNewGuide",
    "group": "Guide",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Guide Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Guide Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Guide Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Guide Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer",
            "description": "<p>Recruit Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Guide URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Guide Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Guide Keyword.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n \"create_date\" : ISODate(\"2019-10-04T07:17:49.952Z\"),\n \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n \"write_date\" : ISODate(\"2019-10-04T07:17:49.952Z\"),\n \"company_id\" : \"ROOT\",\n \"status\" : false,\n \"delete_id\" : null,\n \"category_id\" : [],\n \"short_description\" : \"\",\n \"reaction\" : [],\n \"name\" : \"Asset là gì?\",\n \"answer\" : \"Asset là thị trường bất động sản\",\n \"__v\" : 0,\n \"approve\" : \"APPROVED\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Guide Description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Guide Reaction.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide.js",
    "groupTitle": "Guide"
  },
  {
    "type": "get",
    "url": "/guide/count",
    "title": "Count Number Of Guide",
    "version": "0.1.0",
    "name": "CountNumberOfGuide",
    "group": "Guide",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Guide.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  195\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./guide.js",
    "groupTitle": "Guide"
  },
  {
    "type": "delete",
    "url": "/guide/delete",
    "title": "Delete Guide",
    "version": "0.1.0",
    "name": "DeleteGuide",
    "group": "Guide",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Guide ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d96f24a0e6a5137e42dc153\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide.js",
    "groupTitle": "Guide"
  },
  {
    "type": "put",
    "url": "/guide/edit",
    "title": "Edit Guide",
    "version": "0.1.0",
    "name": "EditGuide",
    "group": "Guide",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Guide ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Guide Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d96f24a0e6a5137e42dc153\",\n  \"name\": \"Asset có gì đặc biệt?\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide.js",
    "groupTitle": "Guide"
  },
  {
    "type": "get",
    "url": "/guide/detail",
    "title": "Get Guide Detail",
    "version": "0.1.0",
    "name": "GetGuideDetail",
    "group": "Guide",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID of guide item .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5d96f24a0e6a5137e42dc153\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Guide",
            "description": "<p>Detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: null,\n    create_date: \"2019-10-04T07:17:49.952Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-04T07:17:49.952Z\",\n    company_id: \"ROOT\",\n    status: false,\n    delete_id: null,\n    category_id: [ ],\n    description: \"\",\n    sequence: 0,\n    keyword: \"\",\n    reaction: [ ],\n    _id: \"5d96f24a0e6a5137e42dc153\",\n    short_description: \"\",\n    name: \"Asset là gì?\",\n    answer: \"Asset là thị trường bất động sản\",\n    __v: 0,\n    approve: \"APPROVED\",\n    id: \"5d96f24a0e6a5137e42dc153\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./guide.js",
    "groupTitle": "Guide"
  },
  {
    "type": "get",
    "url": "/guide/list",
    "title": "Get List Guide",
    "version": "0.1.0",
    "name": "GetListGuide",
    "group": "Guide",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-10-04T08:58:51.467Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-10-04T08:58:51.467Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        category_id: [\n            \"5d970fb503ca2d152823edd9\"\n        ],\n        description: \"\",\n        sequence: 1,\n        keyword: \"\",\n        reaction: [ ],\n        _id: \"5d97102a03ca2d152823eddf\",\n        name: \"Dẫn dắt\",\n        url_name: \"dan-dat\",\n        answer: \"<p>Trong quá trình kết nối xác thực, những người dẫn đầu đã nói với chúng tôi rằng họ chưa sẵn sàng nói chuyện với người đại diện sẽ được chuyển cho bạn để nuôi dưỡng. Những khách hàng tiềm năng này đã được gửi trực tiếp đến Hộp thư đến Đại lý Cấp 1 của bạn với một chỉ định trạng thái mới. Bằng cách này, bạn sẽ nhận được các cơ hội bổ sung và có thể trực tiếp quản lý quá trình nuôi dưỡng chì. Số lượng khách hàng tiềm năng bạn nhận được dựa trên phần chia sẻ giọng nói Quảng cáo Đại lý của bạn, nhưng chúng sẽ không ảnh hưởng đến chia sẻ kết nối điện thoại trực tiếp của bạn.</p>\",\n        __v: 0,\n        approve: \"APPROVED\",\n        category: [\n            {\n                create_uid: \"5d679819325ab70ab0157ce5\",\n                create_date: \"2019-10-04T08:58:51.464Z\",\n                write_uid: \"5d679819325ab70ab0157ce5\",\n                write_date: \"2019-10-04T08:58:51.464Z\",\n                company_id: \"ROOT\",\n                status: true,\n                parent_id: \"5d970e9203ca2d152823edcd\",\n                sequence: 0,\n                description: \"\",\n                _id: \"5d970fb503ca2d152823edd9\",\n                name: \"Kết nối\",\n                url_name: \"ket-noi\",\n                __v: 0\n            }\n        ],\n        id: \"5d97102a03ca2d152823eddf\"\n    },\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide.js",
    "groupTitle": "Guide"
  },
  {
    "type": "post",
    "url": "/guide/category/add",
    "title": "Add New Guide Category",
    "version": "0.1.0",
    "name": "AddNewGuideCategory",
    "group": "Guide_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Guide Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Guide Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Guide Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Guide Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Guide Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Guide Category Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Guide Category Sequence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": true,\n  \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-10-11T01:56:35.189Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-10-11T01:56:35.189Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 0,\n      \"_id\": \"5d9fe168f8d47413b4d7bf38\",\n      \"name\": \"TUYỂN DỤNG THỰC TẬP SINH\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide_category.js",
    "groupTitle": "Guide_Category"
  },
  {
    "type": "get",
    "url": "/guide/category/count",
    "title": "Count Number Of Guide Category",
    "version": "0.1.0",
    "name": "CountNumberOfGuideCategory",
    "group": "Guide_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Guide Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  74\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./guide_category.js",
    "groupTitle": "Guide_Category"
  },
  {
    "type": "delete",
    "url": "/guide/category/delete",
    "title": "Delete Guide Category",
    "version": "0.1.0",
    "name": "DeleteGuideCategory",
    "group": "Guide_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Guide Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d970e9203ca2d152823edcd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide_category.js",
    "groupTitle": "Guide_Category"
  },
  {
    "type": "get",
    "url": "/guide/category/detail",
    "title": "Guide Category Detail",
    "version": "0.1.0",
    "name": "DetailGuideCategory",
    "group": "Guide_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Guide Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d970e9203ca2d152823edcd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": " {\n      _id: \"5d970e9203ca2d152823edcd\",\n      create_uid: \"5d679819325ab70ab0157ce5\",\n      create_date: \"2019-10-04T08:58:51.464Z\",\n      write_uid: \"5d679819325ab70ab0157ce5\",\n      write_date: \"2019-10-04T08:58:51.464Z\",\n      company_id: \"ROOT\",\n      status: true,\n      parent_id: null,\n      description: \"\",\n      name: \"Chuyên gia \",\n      url_name: \"chuyen-gia\",\n      __v: 0,\n      children: [\n          {\n              _id: \"5d970fb503ca2d152823edd9\",\n              create_uid: \"5d679819325ab70ab0157ce5\",\n              create_date: \"2019-10-04T08:58:51.464Z\",\n              write_uid: \"5d679819325ab70ab0157ce5\",\n              write_date: \"2019-10-04T08:58:51.464Z\",\n              company_id: \"ROOT\",\n              status: true,\n              parent_id: \"5d970e9203ca2d152823edcd\",\n              description: \"\",\n              name: \"Kết nối\",\n              url_name: \"ket-noi\",\n              __v: 0\n          },\n          {},\n          {},\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./guide_category.js",
    "groupTitle": "Guide_Category"
  },
  {
    "type": "put",
    "url": "/guide/category/edit",
    "title": "Edit Guide Category",
    "version": "0.1.0",
    "name": "EditGuideCategory",
    "group": "Guide_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Guide Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Guide Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d970e9203ca2d152823edcd\",\n  \"name\": \"Danh Sách Khách hàng của Asset \"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide_category.js",
    "groupTitle": "Guide_Category"
  },
  {
    "type": "get",
    "url": "/guide/category/list",
    "title": "Get List Guide Category",
    "version": "0.1.0",
    "name": "GetListGuideCategory",
    "group": "Guide_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-04T08:58:51.464Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-04T08:58:51.464Z\",\n    company_id: \"ROOT\",\n    status: true,\n    parent_id: null,\n    sequence: 0,\n    description: \"\",\n    _id: \"5d970e9203ca2d152823edcd\",\n    name: \"Chuyên gia \",\n    url_name: \"chuyen-gia\",\n    __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./guide_category.js",
    "groupTitle": "Guide_Category"
  },
  {
    "type": "get",
    "url": "/guide/category/list_tree",
    "title": "Get List Tree Of Guide Category",
    "version": "0.1.0",
    "name": "GetListTreeOfGuideCategory",
    "group": "Guide_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Guide Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[  \n   {\n     _id: \"5d970e9203ca2d152823edcd\",\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-04T08:58:51.464Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-04T08:58:51.464Z\",\n    company_id: \"ROOT\",\n    status: true,\n    parent_id: null,\n    description: \"\",\n    name: \"Chuyên gia \",\n    url_name: \"chuyen-gia\",\n    __v: 0,\n    children: [\n        {\n            _id: \"5d970fb503ca2d152823edd9\",\n            create_uid: \"5d679819325ab70ab0157ce5\",\n            create_date: \"2019-10-04T08:58:51.464Z\",\n            write_uid: \"5d679819325ab70ab0157ce5\",\n            write_date: \"2019-10-04T08:58:51.464Z\",\n            company_id: \"ROOT\",\n            status: true,\n            parent_id: \"5d970e9203ca2d152823edcd\",\n            description: \"\",\n            name: \"Kết nối\",\n            url_name: \"ket-noi\",\n            __v: 0\n       },\n       {}\n    ]\n  } \n]",
          "type": "json"
        }
      ]
    },
    "filename": "./guide_category.js",
    "groupTitle": "Guide_Category"
  },
  {
    "type": "get",
    "url": "/module/list_all",
    "title": "Get List All Module",
    "version": "0.1.0",
    "name": "GetListAllModule",
    "group": "Module",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of All Module.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        _id: \"5d9c0264a3addc58419c9409\",\n        create_uid: null,\n        create_date: \"2019-10-06T07:35:36.812Z\",\n        write_uid: null,\n        write_date: null,\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        description: \"\",\n        keyword: \"\",\n        name: \"Quy hoạch\",\n        code: \"PLANNING\",\n        sequence: 0,\n        icon: \"radius-upright\",\n        parent_id: null,\n        __v: 0,\n        children: [\n            {\n                _id: \"5d9c0409a3addc58419ece93\",\n                create_uid: null,\n                create_date: \"2019-10-06T07:35:36.812Z\",\n                write_uid: null,\n                write_date: null,\n                company_id: \"ROOT\",\n                status: true,\n                delete_id: null,\n                description: \"\",\n                keyword: \"\",\n                url: \"/planning/category\",\n                name: \"Danh mục quy hoạch\",\n                code: \"PLANNING_CATEGORY\",\n                sequence: 0,\n                icon: \"\",\n                category_id: \"5d9c0264a3addc58419c9409\",\n                parent_id: null,\n                __v: 0,\n                type: \"MENU\"\n           },\n           {...},\n           {...}\n        ]\n    }\n    {...},\n    {...},\n    {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./module.js",
    "groupTitle": "Module"
  },
  {
    "type": "get",
    "url": "/partner/list",
    "title": "Get List Partner",
    "version": "0.1.0",
    "name": "GetListPartner",
    "group": "Partner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Partner.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-25T07:48:22.048Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-25T07:48:22.048Z\",\n    company_id: \"ROOT\",\n    status: true,\n    delete_id: null,\n    description: \"\",\n    sequence: 0,\n    website: \"\",\n    address: \"\",\n    ward_id: null,\n    zip: \"\",\n    email: \"\",\n    barcode: \"\",\n    vat: \"\",\n    phone: \"\",\n    mobile: \"\",\n    fax: \"\",\n    category_id: \"5d99b289c56de53b5878bcaa\",\n    gender: \"\",\n    birthday: null,\n    contact_title: \"\",\n    contact_position: \"\",\n    contact_phone: \"\",\n    contact_mobile: \"\",\n    contact_email: \"\",\n    keyword: \"\",\n    _id: \"5db2abddd8ee0717dc269a1c\",\n    code: \"ASSET0001\",\n    name: \"ASSET\",\n    __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./partner.js",
    "groupTitle": "Partner"
  },
  {
    "type": "post",
    "url": "/partner/category/add",
    "title": "Add New Partner Category",
    "version": "0.1.0",
    "name": "AddNewPartnerCategory",
    "group": "Partner_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Partner Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Partner Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Partner Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Partner Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Partner Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Partner Category Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Partner Category Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Partner Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Partner Category Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Partner Category Keyword.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"_id\" : ObjectId(\"5d99b289c56de53b5878bcaa\"),\n    \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"create_date\" : ISODate(\"2019-10-06T07:35:36.819Z\"),\n    \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"write_date\" : ISODate(\"2019-10-06T07:35:36.819Z\"),\n    \"company_id\" : \"ROOT\",\n    \"status\" : true,\n    \"delete_id\" : null,\n    \"description\" : \"\",\n    \"sequence\" : 0,\n    \"keyword\" : \"\",\n    \"name\" : \"Công ty\",\n    \"url_name\" : \"cong-ty\",\n    \"parent_id\" : null,\n    \"code\" : \"COMPANY\",\n    \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./partner_category.js",
    "groupTitle": "Partner_Category"
  },
  {
    "type": "get",
    "url": "/partner/category/count",
    "title": "Count Number Of Partner Category",
    "version": "0.1.0",
    "name": "CountNumberOfPartnerCategory",
    "group": "Partner_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Partner Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./partner_category.js",
    "groupTitle": "Partner_Category"
  },
  {
    "type": "delete",
    "url": "/partner/category/delete",
    "title": "Delete Partner Category",
    "version": "0.1.0",
    "name": "DeletePartnerCategory",
    "group": "Partner_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Partner Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9998fec1782d3a3cd58814\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./partner_category.js",
    "groupTitle": "Partner_Category"
  },
  {
    "type": "get",
    "url": "/partner/category/detail",
    "title": "Partner Category Detail",
    "version": "0.1.0",
    "name": "DetailPartnerCategory",
    "group": "Partner_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Partner Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9998fec1782d3a3cd58814\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n     _id: \"5d99b289c56de53b5878bcaa\",\n     create_uid: \"5d679819325ab70ab0157ce5\",\n     create_date: \"2019-10-06T07:35:36.819Z\",\n     write_uid: \"5d679819325ab70ab0157ce5\",\n     write_date: \"2019-10-06T07:35:36.819Z\",\n     company_id: \"ROOT\",\n     status: true,\n     delete_id: null,\n     description: \"\",\n     sequence: 0,\n     keyword: \"\",\n     name: \"Công ty\",\n     url_name: \"cong-ty\",\n     parent_id: null,\n     code: \"COMPANY\",\n     __v: 0,\n     children: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingPartnerCategoryID",
            "description": "<p>The <code>id</code> of the Partner Category was missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Missing company category ID\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./partner_category.js",
    "groupTitle": "Partner_Category"
  },
  {
    "type": "put",
    "url": "/partner/category/edit",
    "title": "Edit Partner Category",
    "version": "0.1.0",
    "name": "EditPartnerCategory",
    "group": "Partner_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Partner Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Partner Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9998fec1782d3a3cd58814\",\n  \"name\": \"Công ty thiết kế\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdIsNull",
            "description": "<p>The <code>id</code> of the Partner Category was null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ID is null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./partner_category.js",
    "groupTitle": "Partner_Category"
  },
  {
    "type": "get",
    "url": "/partner/category/list",
    "title": "Get List Partner Category",
    "version": "0.1.0",
    "name": "GetListPartnerCategory",
    "group": "Partner_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Partner Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-06T07:35:36.819Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-06T07:35:36.819Z\",\n    company_id: \"ROOT\",\n    status: true,\n    delete_id: null,\n    description: \"\",\n    sequence: 0,\n    keyword: \"\",\n    _id: \"5d99b289c56de53b5878bcaa\",\n    name: \"Công ty\",\n    url_name: \"cong-ty\",\n    parent_id: null,\n    code: \"COMPANY\",\n    __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./partner_category.js",
    "groupTitle": "Partner_Category"
  },
  {
    "type": "get",
    "url": "/partner/category/list_tree",
    "title": "Get List Tree Of Partner Category",
    "version": "0.1.0",
    "name": "GetListTreeOfPartnerCategory",
    "group": "Partner_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Partner Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[  \n   {\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-10-06T07:35:36.819Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-10-06T07:35:36.819Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        description: \"\",\n        sequence: 0,\n        keyword: \"\",\n        _id: \"5d99b289c56de53b5878bcaa\",\n        name: \"Công ty\",\n        url_name: \"cong-ty\",\n        parent_id: null,\n        code: \"COMPANY\",\n        __v: 0,\n        children: [ ]\n        {}\n  } \n]",
          "type": "json"
        }
      ]
    },
    "filename": "./partner_category.js",
    "groupTitle": "Partner_Category"
  },
  {
    "type": "get",
    "url": "/planning/count",
    "title": "Count Number Of Planning",
    "version": "0.1.0",
    "name": "CountNumberOfPlanning",
    "group": "Planning",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Planning.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  17\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/planning/category/list",
    "title": "Get List Category",
    "version": "0.1.0",
    "name": "GetListCategory",
    "group": "Planning",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 2,\n  \"limit\": 10\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n     _id: \"CSK\",\n     create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     create_date: \"2019-08-07T10:56:36.885Z\",\n     write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     write_date: \"2019-08-07T10:56:36.885Z\",\n     company_id: \"ROOT\",\n     status: 0,\n     delete_id: \"\",\n     name: \"Đất sản xuất, kinh doanh phi nông nghiệp\",\n     forecolor: \"#FFA0AA\",\n     backcolor: \"#FFA0AA\",\n     sequence: 1,\n     url_name: \"Dat-nong-nghiep\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/planning/detail",
    "title": "Get Planning Detail",
    "version": "0.1.0",
    "name": "GetPlanningDetail",
    "group": "Planning",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID of planning .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": \"VN71.100\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>Planning Detail Item.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-08T06:57:06.450Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-08T06:57:06.450Z\",\n    company_id: \"\",\n    status: true,\n    delete_uid: null,\n    email: \"\",\n    partner_id: \"\",\n    lang_id: \"\",\n    gmt_offset: \"0.0\",\n    date_format: \"\",\n    time_format: \"\",\n    thousands_sep: \"\",\n    decimal_point: \"\",\n    avatar: \"\",\n    type: \"\",\n    inactive: false,\n    renew_password_id: \"\",\n    online: 0,\n    user_referral_code: \"ATC045\",\n    save_product: [\n    \"710801-P10.17\",\n    \"710801-P10.121\",\n    \"710801-P10.164\"\n    ],\n    save_project: [ ],\n    referral_code: \"AAA012\",\n    fb_id: null,\n    google_id: null,\n    list_referral_user: [\n    \"5da4260ba3addc5841969a8c\"\n    ],\n    _id: \"5d9c3342cc1f7b3f4c8e79dd\",\n    delete_id: \"\",\n    first_name: \"Duong Cong \",\n    last_name: \"Vu\",\n    phone: \"0123123123\",\n    password: \"$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi\",\n    __v: 27,\n    country_code: 84,\n    working_area: \"Quận 11, Tp HCM\",\n    address: \"1011 3 tháng 2, Quận 11, Tp HCM\",\n    followers: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./planning.js",
    "groupTitle": "Planning"
  },
  {
    "type": "get",
    "url": "/planning/category/count",
    "title": "Count Number Of Planning Category",
    "version": "0.1.0",
    "name": "CountNumberOfPlanningCategory",
    "group": "Planning_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Planning Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./planning_category.js",
    "groupTitle": "Planning_Category"
  },
  {
    "type": "get",
    "url": "/planning/category/detail",
    "title": "Planning Category Detail",
    "version": "0.1.0",
    "name": "DetailPlanningCategory",
    "group": "Planning_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Planning Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"CQP\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n     _id: \"CQP\",\n     create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     create_date: \"2019-08-07T10:56:36.818Z\",\n     write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     write_date: \"2019-08-07T10:56:36.818Z\",\n     company_id: \"ROOT\",\n     status: 0,\n     delete_id: \"\",\n     name: \"Đất quốc phòng\",\n     forecolor: \"#FF6450\",\n     backcolor: \"#FF6450\",\n     sequence: 1,\n     url_name: \"Dat-nong-nghiep\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./planning_category.js",
    "groupTitle": "Planning_Category"
  },
  {
    "type": "get",
    "url": "/planning/category/list",
    "title": "Get List Planning Category",
    "version": "0.1.0",
    "name": "GetListPlanningCategory",
    "group": "Planning_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     _id: \"BCS\",\n     create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     create_date: \"2019-08-07T10:56:37.759Z\",\n     write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     write_date: \"2019-08-07T10:56:37.759Z\",\n     company_id: \"ROOT\",\n     status: 0,\n     delete_id: \"\",\n     name: \"Đất bằng chưa sử dụng\",\n     forecolor: \"#FFFFFE\",\n     backcolor: \"#FFFFFE\",\n     sequence: 1,\n     url_name: \"Dat-nong-nghiep\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./planning_category.js",
    "groupTitle": "Planning_Category"
  },
  {
    "type": "post",
    "url": "/category/add",
    "title": "Add Post",
    "version": "0.1.0",
    "name": "AddPost",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Post Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Post Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Post Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Post Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Post URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Post Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Post Photo.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Post Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "receipt_no",
            "description": "<p>Post Receipt Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "receipt_date",
            "description": "<p>Post Receipt Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Post Keyword.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post Content.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flash",
            "description": "<p>Post Flash.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Post Image URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Post Reaction.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Post Comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "publish",
            "description": "<p>Post Publish.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "publish_date",
            "description": "<p>Post Publish Date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": true,\n   \"delete_id\": null,\n   \"description\": \"Ở Sài Gòn một lô đất cho xây dựng diện tích khoảng 30-50m2. Những diện tích này chỉ có ở Khu dân cư hiện hữu chỉnh trang chứ không ở Khu dân cư xây dựng mới.\",\n   \"reaction\": [\n       \"5d8455ae9d64a30ca46266df\",\n       \"5d9187e111860542e4ac449a\",\n       \"5d91a218eb108b2fb47183cf\"\n   ],\n   \"comment\": [],\n   \"publish_date\": \"2019-09-11T01:38:42.912Z\",\n   \"publish\": true,\n   \"name\": \"Đánh Giá Về Tình Hình Xây Dựng Dân Cư Tại TP.HCM\",\n   \"url_name\": \"danh-gia-ve-tinh-hinh-xay-dung-dan-cu-tai-tp-hcm\",\n   \"sequence\": 14,\n   \"category_id\": [\n       \"5d809e35dc23f01c7c85a09d\"\n   ],\n   \"keyword\": \"khu dân cư hiện hữu chỉnh trang, khu dân cư xây dựng mới, dân cư tại sài gòn\",\n   \"content\": \"<p>Theo kinh nghiệm, ở Sài Gòn một lô đất cho phép xây dựng tự do có diện tích khoảng 30-50m2 là tốt nhất. Lý do có thể được phân tích như sau:</p><p>Theo quy chuẩn thiết kế của Việt Nam, 01 người để thoải mái tương đối thì cần một khoảng không gian sống tương ứng 25m2, đó là tiêu chuẩn của nhà ở thương mại.</p><p>Tiêu chuẩn cho các đối tượng thu nhập thấp hơn giảm xuống 12m2/người, còn nhà trọ sinh viên thì trong thực tế khoảng 4 - 8m2/người.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/33dfe6a6-7b88-4328-b021-f6cf7da1e5d2.jpg\\\"></p><p>Một mẫu nhà 50m2 phổ biến tại sài gòn</p><p><br></p><p><br></p><p><br></p><p>Nếu lấy chuẩn từ 12-25m2/người,thì một gia đình trung bình có 04 người, cần một diện tích sàn khoảng 48-100m2.Với diện tích đất khoảng 30-50m2, xây trung bình khoảng 2 tầng, là đủ diện tíchsống cho một gia đình 04 người.</p><p>Ngoài ra, với diện tích từ30-50m2, thì tổng giá trị đất, giá trị xây dựng nhà cũng không quá cao, phù hợpvới thu nhập trung bình của nhiều gia đình ở Thành phố. Đó là lý do loại diệntích này là tương đối tốt và phù hợp.</p><p>Tuy nhiên, những diện tích này chỉ xuất hiện ở Khu dân cư hiện hữu chỉnh trang chứ không xuất hiện ở Khu dân cư xây dựng mới.</p><h2><strong>Lược lại một chút về lịch sử</strong></h2><p>Lược lại lịch sử một chút, như chúng ta cũng biết, Sài Gòn được quy hoạch khá bài bản ở khu Q1, Q3, bởi người Pháp. Ở đây, đường chạy theo ô bàn cờ. Và theo lịch sử, thời gian đó được quy hoạch chỉn chu với các khu ở, khu hành chính khu trường học, bệnh viện, công trình công cộng … đầy đủ.</p><p>Nhưng đến sau đó, dân số tăng nhanh, thành phố mở rộng chủ yếu về hướng Bắc và Tây Thành phố, là những nơi có khu đất cao, và vì bối cảnh lịch sử, chiến tranh, di dân…, việc phát triển này đa số tự phát.</p><p>Dân đông lên nhưng đất không “nở” ra được, do đó phải phân lô, tách thửa cũng tự phát, rồi trổ hẻm…, trổ đường ngang dọc, kể cả xéo.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/d863cd78-e14d-4b57-93a6-c96f992cc52c.jpg\\\"></p><p><br></p><p><br></p><p>Nhà xây tự do, trồi sụt, đường không có vỉa hè, cây xanh, đa số chỉ toàn đất và nhà nhiều kiểu nhiều loại, tự do hết mức.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/70414ce0-0697-41b5-a5aa-d47fcf49cfaf.jpg\\\"></p><p>Những khu nhà tạm kiểu này đã tồn tại ở Sài Gòn từ rất lâu rồi</p><p><br></p><p><br></p><p><br></p><p>Cũng vì nhu cầu ở và sự quản lýkhông chặt chẽ việc phân lô tách thửa không chỉ diễn ra ở các quận Bắc, Tây, màđến các quận trung tâm như Q3, các thửa đất Biệt thự được phân lô đẹp đẽ cũng bịtách ra thành các thửa nhỏ, trổ hẻm. Thậm chí các khu đất công cộng thì cũng bịchiếm mặt tiền…</p><p>Vì vùng đất phía Tây và Băc là đất cao, nên dễ tự phát, và dễ tách thửa, do đó khu vực các quận hướng này ở đặc người.</p><p><br></p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/9bb8972d-30e9-43e4-9c85-243fe753819c.jpg\\\"></p><p><br></p><p>Một góc khu đô thị Phú Mỹ Hưng</p><p><br></p><p><br></p><p><br></p><p>Các quận ở phía Nam, Đông, do đặc điểm địa hình thấp, ao hồ nhiều, nên dân cư chỉ tập trung ở xung quanh các kênh hay các tuyến đường chính.</p><p>Đến khoảng năm 1992, bắt đầu xuất hiện các Công ty Bất động sản, lúc này mới bắt đầu phát triển ra khu Đông, Nam, là những vùng đất trũng, ít người. Phú Mỹ Hưng là đơn vị tiên phong.</p><p>Để minh chứng, sự phát triển dân số qua thời gian của các khu vực trong thành phố có thể được tóm gọn cụ thể trong Infographic sau: (Số liệu dựa trên niên giám thống kê của cục thống kê TP.HCM)</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/21342f5e-5dcd-45f3-9194-b2bf78d80421.jpg\\\"></p><p>*Chú thích: Không có số liệu thống kê cho Tân Phú và Bình Tân của năm 1999</p><p><br></p><p><br></p><p>Sài Gòn hiện nay chia thành 02 nửa. Nửa Tây, Bắc thì đa số là dân cư tự phát, tạo thành các khu Dân cư hiện hữu chỉnh trang. Nửa Đông, Nam thì đa số là đất Dự án, là Khu dân cư xây dựng mới, xen kẽ đó là các khu dân cư hiện hữu ở dọc trục các đường lớn.</p><h2><strong>Khu dân cư hiện hữu chỉnh trang</strong></h2><p>Đến đây cũng đã phần nào hiểu được Khu dân cư hiện hữu chỉnh trang là gì, với loại quy hoạch này, thường được áp dụng theo kiểu tự phát nhưng được quản lý, nghĩa là vẫn cho theo các đặc điểm của khu tự phát như phân lô, tách thửa, trổ hẻm, được xây tự do, có sổ đỏ, phân thửa nhỏ…, nhưng được quản lý về mặt quy hoạch chứ không bỏ như trước.</p><h2><strong>Khu dân cư xây dựng mới</strong></h2><p>Với loại này thì đa số là kiểu đấtDự án, làm lại từ đầu. Với loại quy hoạch này thì quy chuẩn áp dụng mới hoàntoàn và bị siết chặt hơn nhiều so với Khu dân cư hiện hữu chỉnh trang. Với loạiquy hoạch này, ở Sài Gòn thì không được cấp sổ đỏ, phải xây nhà theo mẫu, khôngđược trổ hẻm…, việc quy hoạch này tạo ra các khu dân cư, khu đô thị mới, quycũ, và đẹp.</p><h2><strong>Một số nghịch lý</strong></h2><p>Chúng ta vẫn luôn thích một miếng đất có sổ đỏ và xây dựng tự do, nhưng cũng lại muốn một khu đô thị đẹp đẽ, đồng đều.</p><p>Đây là một mong muốn hơi mâu thuẫn, vì đã tự do thì sẽ không thể đồng đều với phong cách mong muốn khác biệt của người Việt.</p><p>Vì thế, chắc chắn muốn xây dựng tự do thì không đồng đều, mà muốn đồng đều thì chắc chắn không thể xây dựng tự do.</p><p>Với các khu dân cư hiện hữu, diện tích một lô đất nằm ở khoảng 30-50m2, và xây tự do với mật độ 100%, do đó số lượng dân cư đông.</p><p>Khi dân đông thì bù lại có nhiều tiện ích, càng nhiều tiện ích thì dân cư lại tập trung càng đông.</p><p><br></p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/3c719f0a-1f29-4bfc-adcb-4f12dce4232b.jpg\\\"></p><p>Những khu vực như quận 1 hay quận 7 luôn có những tiện ích vượt trội</p><p><br></p><p><br></p><p><br></p><p>Với các khu dân cư xây dựng mới, thì diện tích tổi thiểu thường là 100m2, và việc xây dựng phải lùi trước, lùi sau, xây nhà theo mẫu, do đó tuy đẹp nhưng dân cư lại thưa thớt.</p><p>Theo quy hoạch cũng có nhiều khu đất để làm tiện ích, nhưng vì dân cư không có nên không xây tiện ích được mà chỉ là các khu đất trống.</p><p>Khi mà tiện ích không có thì bù lại dân cư không về, dân cư không về thì không việc gì xây tiện ích, và vòng luẩn quẩn như thế tạo nên nhiều khu quy hoạch cũng đẹp mà không có người ở.</p><h2><strong>Và một vài điều thú vị xảy ra</strong></h2><p>Nhìn vào bản đồ vệ tinh Sài Gòn, chúng ta có thể thấy rõ về sự phân bố dân cư nghiêng hẳn về Tây, Bắc, nhưng nếu quan sát bản đồ Dự án thì ngược lại, số lượng Dự án nghiêng hẳn về hướng Đông và Nam.</p><p>Xét về hệ số sử dụng đất, hay mật độ dân cư, mật độ giao thông, chắc chắn khu Đông – Nam sẽ có mật độ dân cư thấp hơn và mật độ giao thông cao hơn Khu Tây, Bắc.</p><p>Theo đó, khu Đông, Nam là khu dân cư mới, khu Tây, Bắc là khu dân cư hiện hữu (cũ), thế nên về ở, về môi trường sống, và về cả độ “giàu” thì dân cư hướng Tây, Bắc hơn Đông, Nam.</p><p>Về hiện hữu thì Khu Bắc, Tây chiếm ưu thế, nhưng về Dự án thì Khu Đông, Nam lại chiếm ưu thế.</p><p>Các công trình chung cư, các khu đô thị mới ở hướng Đông, Nam khác khá nhiều ở hướng Tây, Bắc.</p><p>Tuy nhiên, dân hướng Tây, Bắc lại nắm giữ văn hóa, hay “túi khôn” của cả Thành phố, bằng chứng là các trường học nổi tiếng, các hội đoàn… đều nằm ở hướng Bắc, Tây. Thậm chí những thứ hay ho, tinh tế cũng nằm hướng Tây, Bắc.</p><p>Ngược lại, khu Đông, Nam lại dành nhiều cho người trẻ, những người chịu đi và ít tiền, thích một cuộc sống hiện đại.</p><p>Các sinh hoạt mang tính văn hóa, các quán café đặc biệt, quán ăn ngon, hội đoàn lớn… thường không nằm ở hướng Đông, Nam.</p><p>Đôi khi đi một vòng, sẽ thấy được những thứ mà mình chưa hề nghĩ nó tồn tại, thật đó.</p>\",\n   \"flash\": 0,\n   \"image_url\": \"images/Post/33dfe6a6-7b88-4328-b021-f6cf7da1e5d2.jpg\",\n   \"category\": [\n       {\n           \"_id\": \"5d809e35dc23f01c7c85a09d\",\n           \"name\": \"Doanh nghiệp\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/count",
    "title": "Count Number Of Post",
    "version": "0.1.0",
    "name": "CountNumberOfPost",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number Of Post.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  25\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "delete",
    "url": "/post/delete",
    "title": "Delete Post",
    "version": "0.1.0",
    "name": "DeletePost",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d787a7de6122e0490bd78c9\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "put",
    "url": "/post/edit",
    "title": "Edit Post",
    "version": "0.1.0",
    "name": "EditPost",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status_name",
            "description": "<p>Project Status Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d787a7de6122e0490bd78c9\",\n  \"description\": \"Một năm sau, anh bán miếng đất với giá 2.160tr, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2.300tr. Giờ thì căn nhà đó cũng giá cao cao rồi....\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/list",
    "title": "List Post",
    "version": "0.1.0",
    "name": "ListPost",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Post Page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Post Limit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   {\n     \"_id\": \"5d787a7de6122e0490bd78c9\",\n     \"create_uid\": {\n         \"_id\": \"5d679819325ab70ab0157ce5\",\n         \"first_name\": \"admin\",\n         \"last_name\": \"admin\"\n     },\n     \"create_date\": \"2019-09-11T01:38:42.912Z\",\n     \"write_uid\": \"5d679819325ab70ab0157ce5\",\n     \"write_date\": \"2019-09-25T03:29:17.026Z\",\n     \"company_id\": \"ROOT\",\n     \"status\": true,\n     \"delete_id\": null,\n     \"description\": \"Một năm sau, anh bán miếng đất với giá 2.160tr, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2.300tr. Giờ thì căn nhà đó cũng giá cao cao rồi....\",\n     \"reaction\": [\n         \"5d82ebca1103a80fbc112019\",\n         \"5d9186129b827e3e2cba87c9\",\n         \"5d91867c9b827e3e2cba87ce\",\n         \"5d917938f81d183444402b33\",\n         \"5d9187d011860542e4ac4499\",\n         \"5d9188d7ec45fd0c54cd1c75\",\n         \"5d91d35c0f1b9c3ac8bc41e2\",\n         \"5d918b2c0ce1872d5cc5c70b\"\n     ],\n     \"comment\": [],\n     \"publish_date\": \"2019-09-23T01:46:19.622Z\",\n     \"publish\": true,\n     \"name\": \"Chuyện thật: Căn nhà đầu tiên của 1 người tôi quen\",\n     \"url_name\": \"chuyen-that-can-nha-dau-tien-cua-1-nguoi-toi-quen\",\n     \"sequence\": 12,\n     \"category_id\": [\n         \"5d809fe2dc23f01c7c85a0b1\"\n     ],\n     \"keyword\": \"\",\n     \"content\": \"<p>Anh M là dân 9x, tốt nghiệp Đại học xong thì đi làm cho sàn Môi giới Bất động sản, đó là một trong những việc dễ kiếm nhất, bù lại thì lương cơ bản không cao.</p><p>Nghề sale Bất động sản lên voi xuống chó, trồi sụt tùy vào tình hình thị trường và đôi khi là cái “duyên”, sau thời gian đầu trầy trật thì khoảng một năm sau, mỗi tháng cũng có ít giao dịch nên thu nhập cũng được kha khá.</p><p>Cùng thời gian đó, có một người đồng nghiệp có chồng cùng mấy người bạn mở một quán café nhạc DJ, cũng làm ăn kha khá, vốn đầu tư ban đầu tầm 700tr mà doanh thu mỗi tháng khoảng 350tr (khoảng 12tr/ngày).</p><p>Anh M vì là người có học hành đàng hoàng, nên ngày đi làm sale, tối đi trực quán DJ, thậm chí được nhờ làm báo cáo các khoản thu chi, để nhằm chia lãi cho các cổ đông quán.</p><p>Đó là lý do anh M biết được chính xác doanh thu hàng tháng của quán. Sáng đi làm sale, tối đi làm sếp quán nhiều em chân dài. Oai phong lẫm liệt.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/e2de2bec-1744-487c-abd6-28d077bdb2e2.jpg\\\"></p><p><br></p><p>Quán hoạt động được tầm 10 tháng, ăn nên làm ra, anh M cũng ăn nên làm ra trong việc sale, lúc này chị đồng nghiệp mới “rỉ tai” là mấy cổ đông quán có chuyện “cơm không lành, canh không ngọt” nên có ý định tách.</p><p>Do đó ghế cổ đông tự nhiên trống, và vì tình cảm chị em nên dành cho anh M 20% với giá 200tr.</p><p>Anh M nhẩm tính thì thấy quá hời, thế nên mới “chơi lớn”, dốc hết hầu bao được 70tr (sale trúng mới dư được nhiêu), cũng thời gian đó, mấy ngân hàng không biết “đánh hơi” kiểu gì mà có thu nhập cao cao xí là gọi dụ vay tín chấp liên tục.</p><p>Kiểu như thời cơ đến, anh M làm hồ sơ vay, dụ lun cậu bạn thời sinh viên góp cho đủ 200tr, dù rằng cái ngân hàng cho vay tín chấp nó “quất” lãi suất tới 3.6%/tháng. Nhưng có lo gì, vì theo tính toán thì mấy tháng là lại vốn thôi, lúc đó tính.</p><p>Sau khi nộp tiền xong, thì đến Tết, quán nghỉ, không có thu nhập. Ra Tết thì ngay lập tức có chuyện, đó là cái quán nó ồn quá nên cái ông hàng xóm gửi đơn thư lên phường, lên Quận, thế là quán không còn được mở nhạc DJ nữa.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/2bf87d74-b9c2-4ff4-b56f-d39c913d968f.jpg\\\"></p><p><br></p><p>Không có nhạc, không có khách, không có doanh thu…, và tháng nào cũng bù lỗ. Anh M chưa được hưởng miếng tiền lời nào từ quán thì giờ còn phải bù lỗ.</p><p>Và lúc này chị đồng nghiệp lại “rỉ tai” rằng có người muốn mua toàn bộ lại để chuyển đổi mô hình kinh doanh với giá 600tr.</p><p>Cái xui nối tiếp cái rủi, lúc này việc Sale cũng không ăn nên làm ra nữa, sàn giao dịch có dấu hiệu dẹp, thế là anh M quyết định bán, tổng cộng khi nộp tiền vào mua cổ phần bán cổ phần ra, đi tất toán ngân hàng, thì anh M “trắng tay”.</p><p>Chuyển đổi nghề nghiệp qua làm ngân hàng. Lần này không có những khoản thu nhiều như sale, nhưng anh hài lòng với việc đó và làm lại từ đầu.</p><p>Kể dài dòng như trên để kết luận rằng sau một thời gian thì anh M trắng tay, không có tích trữ gì cả.</p><p>Tiếp.</p><p>Khi có thêm một chút tích trữ nữa thì anh cưới vợ, cưới vợ xong thì dư ra 200tr. Lúc này ở Q8 người ta bán miếng đất có giá 1 tỷ 050, anh mua luôn, vì làm ngân hàng nên có bạn bè quen biết, a chỉ mất 200tr để mua miếng đất 1.050tr, phần còn lại ngân hàng hỗ trợ.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/e94eefb0-2abd-4e22-a0ee-3517c44facb0.jpg\\\"></p><p class=\\\"ql-align-center\\\"><br></p><p>Một năm sau, anh bán miếng đất với giá 2 tỷ 160, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2 tỷ 3. Giờ thì căn nhà đó cũng giá cao cao rồi. Đương nhiên nợ thì ảnh vẫn nợ, nhà thì ảnh vẫn có.</p><p>Đó, câu chuyện về căn nhà đầu tiên của anh M nó diễn ra như thế.</p><p>Có người sẽ cho rằng anh M hên, “trúng” liên tục. Tuy nhiên ảnh cũng xui với thương vụ đầu tiên, đôi khi nếu thương vụ đầu tiên liên quan đến cái quán mà ảnh “trúng” thì chưa chắc ảnh đả mua được nhà.</p><p>Cuộc đời này, hên có, xui có, nó là bản chất cuộc sống, tuy nhiên khi chúng ta tập trung và có mục tiêu rõ ràng thì sẽ nắm bắt được cái hên. Thật ra thời gian qua, nhà đất tăng ầm ầm cả Sài Gòn và các vùng lân cận.</p><p>Nhưng trong cái tăng đó, có người dám “nhảy” vào thị trường, có người không dám. Thật ra thì không ai có tài thánh đoán được tương lai, chỉ là vì họ tin vào khả năng của mình và chịu rủi ro.</p><p>P/S: Nói thêm về vụ chỉ có 200tr mà anh M mua được miếng đất 1 tỷ 050 tỷ. Lý do là anh M có 1 người bạn, thời gian đó người bạn đó lại cưới một cô vợ cùng ngân hàng, và theo quy định của ngân hàng thì hai vợ chồng không được làm cùng một ngân hàng, do đó anh chồng quyết định qua ngân hàng khác, vì qua ngân hàng khác thì ngân hàng đó yêu cầu chỉ tiêu vay, thế là anh bạn đó dụ anh M vay luôn với nhiều ưu đãi. Cái cơ hội đến thì anh M “hốt” thôi. Đó là sự may mắn.</p>\",\n     \"__v\": 54,\n     \"flash\": 0,\n     \"image_url\": \"\",\n     \"category\": [\n         {\n             \"_id\": \"5d809fe2dc23f01c7c85a0b1\",\n             \"name\": \"Phân tích chuyên đề\"\n         }\n     ]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/detail",
    "title": "Post Detail",
    "version": "0.1.0",
    "name": "PostDetail",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Post ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d787a7de6122e0490bd78c9\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  \"create_uid\": {\n      \"_id\": \"5d679819325ab70ab0157ce5\",\n      \"first_name\": \"admin\",\n      \"last_name\": \"admin\"\n  },\n  \"create_date\": \"2019-09-11T01:38:42.912Z\",\n  \"write_uid\": \"5d679819325ab70ab0157ce5\",\n  \"write_date\": \"2019-09-25T03:29:17.026Z\",\n  \"company_id\": \"ROOT\",\n  \"status\": true,\n  \"delete_id\": null,\n  \"category_id\": [\n      \"5d809fe2dc23f01c7c85a0b1\"\n  ],\n  \"description\": \"Một năm sau, anh bán miếng đất với giá 2.160tr, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2.300tr. Giờ thì căn nhà đó cũng giá cao cao rồi....\",\n  \"flash\": 0,\n  \"reaction\": [\n      \"5d9186129b827e3e2cba87c9\",\n      \"5d91867c9b827e3e2cba87ce\",\n      \"5d917938f81d183444402b33\",\n      \"5d9187d011860542e4ac4499\",\n      \"5d9188d7ec45fd0c54cd1c75\",\n      \"5d91d35c0f1b9c3ac8bc41e2\"\n  ],\n  \"comment\": [],\n  \"publish\": true,\n  \"publish_date\": \"2019-09-23T01:46:19.622Z\",\n  \"_id\": \"5d787a7de6122e0490bd78c9\",\n  \"name\": \"Chuyện thật: Căn nhà đầu tiên của 1 người tôi quen\",\n  \"url_name\": \"chuyen-that-can-nha-dau-tien-cua-1-nguoi-toi-quen\",\n  \"sequence\": 12,\n  \"keyword\": \"\",\n  \"content\": \"<p>Anh M là dân 9x, tốt nghiệp Đại học xong thì đi làm cho sàn Môi giới Bất động sản, đó là một trong những việc dễ kiếm nhất, bù lại thì lương cơ bản không cao.</p><p>Nghề sale Bất động sản lên voi xuống chó, trồi sụt tùy vào tình hình thị trường và đôi khi là cái “duyên”, sau thời gian đầu trầy trật thì khoảng một năm sau, mỗi tháng cũng có ít giao dịch nên thu nhập cũng được kha khá.</p><p>Cùng thời gian đó, có một người đồng nghiệp có chồng cùng mấy người bạn mở một quán café nhạc DJ, cũng làm ăn kha khá, vốn đầu tư ban đầu tầm 700tr mà doanh thu mỗi tháng khoảng 350tr (khoảng 12tr/ngày).</p><p>Anh M vì là người có học hành đàng hoàng, nên ngày đi làm sale, tối đi trực quán DJ, thậm chí được nhờ làm báo cáo các khoản thu chi, để nhằm chia lãi cho các cổ đông quán.</p><p>Đó là lý do anh M biết được chính xác doanh thu hàng tháng của quán. Sáng đi làm sale, tối đi làm sếp quán nhiều em chân dài. Oai phong lẫm liệt.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/e2de2bec-1744-487c-abd6-28d077bdb2e2.jpg\\\"></p><p><br></p><p>Quán hoạt động được tầm 10 tháng, ăn nên làm ra, anh M cũng ăn nên làm ra trong việc sale, lúc này chị đồng nghiệp mới “rỉ tai” là mấy cổ đông quán có chuyện “cơm không lành, canh không ngọt” nên có ý định tách.</p><p>Do đó ghế cổ đông tự nhiên trống, và vì tình cảm chị em nên dành cho anh M 20% với giá 200tr.</p><p>Anh M nhẩm tính thì thấy quá hời, thế nên mới “chơi lớn”, dốc hết hầu bao được 70tr (sale trúng mới dư được nhiêu), cũng thời gian đó, mấy ngân hàng không biết “đánh hơi” kiểu gì mà có thu nhập cao cao xí là gọi dụ vay tín chấp liên tục.</p><p>Kiểu như thời cơ đến, anh M làm hồ sơ vay, dụ lun cậu bạn thời sinh viên góp cho đủ 200tr, dù rằng cái ngân hàng cho vay tín chấp nó “quất” lãi suất tới 3.6%/tháng. Nhưng có lo gì, vì theo tính toán thì mấy tháng là lại vốn thôi, lúc đó tính.</p><p>Sau khi nộp tiền xong, thì đến Tết, quán nghỉ, không có thu nhập. Ra Tết thì ngay lập tức có chuyện, đó là cái quán nó ồn quá nên cái ông hàng xóm gửi đơn thư lên phường, lên Quận, thế là quán không còn được mở nhạc DJ nữa.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/2bf87d74-b9c2-4ff4-b56f-d39c913d968f.jpg\\\"></p><p><br></p><p>Không có nhạc, không có khách, không có doanh thu…, và tháng nào cũng bù lỗ. Anh M chưa được hưởng miếng tiền lời nào từ quán thì giờ còn phải bù lỗ.</p><p>Và lúc này chị đồng nghiệp lại “rỉ tai” rằng có người muốn mua toàn bộ lại để chuyển đổi mô hình kinh doanh với giá 600tr.</p><p>Cái xui nối tiếp cái rủi, lúc này việc Sale cũng không ăn nên làm ra nữa, sàn giao dịch có dấu hiệu dẹp, thế là anh M quyết định bán, tổng cộng khi nộp tiền vào mua cổ phần bán cổ phần ra, đi tất toán ngân hàng, thì anh M “trắng tay”.</p><p>Chuyển đổi nghề nghiệp qua làm ngân hàng. Lần này không có những khoản thu nhiều như sale, nhưng anh hài lòng với việc đó và làm lại từ đầu.</p><p>Kể dài dòng như trên để kết luận rằng sau một thời gian thì anh M trắng tay, không có tích trữ gì cả.</p><p>Tiếp.</p><p>Khi có thêm một chút tích trữ nữa thì anh cưới vợ, cưới vợ xong thì dư ra 200tr. Lúc này ở Q8 người ta bán miếng đất có giá 1 tỷ 050, anh mua luôn, vì làm ngân hàng nên có bạn bè quen biết, a chỉ mất 200tr để mua miếng đất 1.050tr, phần còn lại ngân hàng hỗ trợ.</p><p class=\\\"ql-align-center\\\"><img src=\\\"http://27.74.250.96:8386/images/post/e94eefb0-2abd-4e22-a0ee-3517c44facb0.jpg\\\"></p><p class=\\\"ql-align-center\\\"><br></p><p>Một năm sau, anh bán miếng đất với giá 2 tỷ 160, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2 tỷ 3. Giờ thì căn nhà đó cũng giá cao cao rồi. Đương nhiên nợ thì ảnh vẫn nợ, nhà thì ảnh vẫn có.</p><p>Đó, câu chuyện về căn nhà đầu tiên của anh M nó diễn ra như thế.</p><p>Có người sẽ cho rằng anh M hên, “trúng” liên tục. Tuy nhiên ảnh cũng xui với thương vụ đầu tiên, đôi khi nếu thương vụ đầu tiên liên quan đến cái quán mà ảnh “trúng” thì chưa chắc ảnh đả mua được nhà.</p><p>Cuộc đời này, hên có, xui có, nó là bản chất cuộc sống, tuy nhiên khi chúng ta tập trung và có mục tiêu rõ ràng thì sẽ nắm bắt được cái hên. Thật ra thời gian qua, nhà đất tăng ầm ầm cả Sài Gòn và các vùng lân cận.</p><p>Nhưng trong cái tăng đó, có người dám “nhảy” vào thị trường, có người không dám. Thật ra thì không ai có tài thánh đoán được tương lai, chỉ là vì họ tin vào khả năng của mình và chịu rủi ro.</p><p>P/S: Nói thêm về vụ chỉ có 200tr mà anh M mua được miếng đất 1 tỷ 050 tỷ. Lý do là anh M có 1 người bạn, thời gian đó người bạn đó lại cưới một cô vợ cùng ngân hàng, và theo quy định của ngân hàng thì hai vợ chồng không được làm cùng một ngân hàng, do đó anh chồng quyết định qua ngân hàng khác, vì qua ngân hàng khác thì ngân hàng đó yêu cầu chỉ tiêu vay, thế là anh bạn đó dụ anh M vay luôn với nhiều ưu đãi. Cái cơ hội đến thì anh M “hốt” thôi. Đó là sự may mắn.</p>\",\n  \"__v\": 64,\n  \"image_url\": \"\",\n  \"category\": [\n      {\n          \"_id\": \"5d809fe2dc23f01c7c85a0b1\",\n          \"name\": \"Phân tích chuyên đề\"\n      }\n  ],\n  \"id\": \"5d787a7de6122e0490bd78c9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingPostID",
            "description": "<p>Missing Post <code>id</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Missing Post ID\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./post.js",
    "groupTitle": "Post"
  },
  {
    "type": "post",
    "url": "/post/category/add",
    "title": "Add Post Category",
    "version": "0.1.0",
    "name": "AddPostCategory",
    "group": "Post_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Post Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Post Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Post Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Post Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Post Category Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Post Category Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Post Category Keyword.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Post Category Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Post Category URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>Post Category Tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "publish",
            "description": "<p>Post Category Publish.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"status\": true,\n   \"data\": {\n       \"create_uid\": \"5d679819325ab70ab0157ce5\",\n       \"create_date\": \"2019-10-04T01:28:33.332Z\",\n       \"write_uid\": \"5d679819325ab70ab0157ce5\",\n       \"write_date\": \"2019-10-04T01:28:33.332Z\",\n       \"company_id\": \"ROOT\",\n       \"status\": true,\n       \"delete_id\": null,\n       \"description\": \"\",\n       \"keyword\": \"\",\n       \"tag\": \"\",\n       \"publish\": true,\n       \"_id\": \"5d96c04bd752d617ec7bed89\",\n       \"name\": \"Điểm tin\",\n       \"url_name\": \"diem-tin\",\n       \"parent_id\": \"5d6b1efb482f80200ccbefa7\",\n       \"sequence\": 45,\n       \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post_category.js",
    "groupTitle": "Post_Category"
  },
  {
    "type": "get",
    "url": "/post/category/count",
    "title": "Count Post Category",
    "version": "0.1.0",
    "name": "CountPostCategory",
    "group": "Post_Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n    25\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./post_category.js",
    "groupTitle": "Post_Category"
  },
  {
    "type": "get",
    "url": "/post/category/detail",
    "title": "Post Category Detail",
    "version": "0.1.0",
    "name": "DetailPostCategory",
    "group": "Post_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Post Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d809d260b8fca1be4d8efaa\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": " {\n      _id: \"5d809d260b8fca1be4d8efaa\",\n      create_uid: \"5d679819325ab70ab0157ce5\",\n      create_date: \"2019-09-17T08:43:26.895Z\",\n      write_uid: \"5d679819325ab70ab0157ce5\",\n      write_date: \"2019-09-17T08:43:26.895Z\",\n      company_id: \"ROOT\",\n      status: true,\n      delete_id: null,\n      description: \"\",\n      keyword: \"\",\n      tag: \"\",\n      publish: true,\n      name: \"Kiến thức kinh nghiệm\",\n      url_name: \"kien-thuc-kinh-nghiem\",\n      sequence: 18,\n      parent_id: null,\n      __v: 0,\n      children: [\n          {\n              _id: \"5d809e070ba8a018d4b92d20\",\n              create_uid: \"5d679819325ab70ab0157ce5\",\n              create_date: \"2019-09-17T08:48:52.547Z\",\n              write_uid: \"5d679819325ab70ab0157ce5\",\n              write_date: \"2019-09-17T08:48:52.547Z\",\n              company_id: \"ROOT\",\n              status: true,\n              delete_id: null,\n              description: \"\",\n              keyword: \"\",\n              tag: \"\",\n              publish: true,\n              name: \"Cách bán nhà\",\n              url_name: \"cach-ban-nha\",\n              sequence: 19,\n              parent_id: \"5d809d260b8fca1be4d8efaa\",\n              __v: 0\n          },\n          {},\n          {},\n          {}\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./post_category.js",
    "groupTitle": "Post_Category"
  },
  {
    "type": "put",
    "url": "/post/category/edit",
    "title": "Edit Post Category",
    "version": "0.1.0",
    "name": "EditPostCategory",
    "group": "Post_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Post Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Post Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d809d260b8fca1be4d8efaa\",\n  \"name\": \"Kiến thức kinh nghiệm và đời sống\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post_category.js",
    "groupTitle": "Post_Category"
  },
  {
    "type": "get",
    "url": "/post/category/list_tree",
    "title": "Get List Tree Of Post Category",
    "version": "0.1.0",
    "name": "GetListTreeOfPostCategory",
    "group": "Post_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Post Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[  \n   {\n     \"_id\": \"5d809d260b8fca1be4d8efaa\",\n     \"create_uid\": \"5d679819325ab70ab0157ce5\",\n     \"create_date\": \"2019-09-17T08:43:26.895Z\",\n     \"write_uid\": \"5d679819325ab70ab0157ce5\",\n     \"write_date\": \"2019-09-17T08:43:26.895Z\",\n     \"company_id\": \"ROOT\",\n     \"status\": true,\n     \"delete_id\": null,\n     \"description\": \"\",\n     \"keyword\": \"\",\n     \"tag\": \"\",\n     \"publish\": true,\n     \"name\": \"Kiến thức kinh nghiệm\",\n     \"url_name\": \"kien-thuc-kinh-nghiem\",\n     \"sequence\": 18,\n     \"parent_id\": null,\n     \"__v\": 0,\n     \"children\": [\n         {\n             \"_id\": \"5d809e070ba8a018d4b92d20\",\n             \"create_uid\": \"5d679819325ab70ab0157ce5\",\n             \"create_date\": \"2019-09-17T08:48:52.547Z\",\n             \"write_uid\": \"5d679819325ab70ab0157ce5\",\n             \"write_date\": \"2019-09-17T08:48:52.547Z\",\n             \"company_id\": \"ROOT\",\n             \"status\": true,\n             \"delete_id\": null,\n             \"description\": \"\",\n             \"keyword\": \"\",\n             \"tag\": \"\",\n             \"publish\": true,\n             \"name\": \"Cách bán nhà\",\n             \"url_name\": \"cach-ban-nha\",\n             \"sequence\": 19,\n             \"parent_id\": \"5d809d260b8fca1be4d8efaa\",\n             \"__v\": 0\n         },\n         {...},\n         {...},\n         {...},\n     ]\n   } \n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post_category.js",
    "groupTitle": "Post_Category"
  },
  {
    "type": "get",
    "url": "/post/category/list",
    "title": "List Post Category",
    "version": "0.1.0",
    "name": "ListPostCategory",
    "group": "Post_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 2,\n  \"limit\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   {\n     \"create_uid\": \"5d679819325ab70ab0157ce5\",\n     \"create_date\": \"2019-09-17T08:49:38.228Z\",\n     \"write_uid\": \"5d679819325ab70ab0157ce5\",\n     \"write_date\": \"2019-09-17T08:49:38.228Z\",\n     \"company_id\": \"ROOT\",\n     \"status\": true,\n     \"delete_id\": null,\n     \"description\": \"\",\n     \"keyword\": \"\",\n     \"tag\": \"\",\n     \"publish\": true,\n     \"_id\": \"5d809eb9dc23f01c7c85a0a6\",\n     \"name\": \"Quy trình - form mẫu\",\n     \"url_name\": \"quy-trinh-form-mau\",\n     \"sequence\": 30,\n     \"parent_id\": {\n         \"create_uid\": \"5d679819325ab70ab0157ce5\",\n         \"create_date\": \"2019-09-17T08:43:26.895Z\",\n         \"write_uid\": \"5d679819325ab70ab0157ce5\",\n         \"write_date\": \"2019-09-17T08:43:26.895Z\",\n         \"company_id\": \"ROOT\",\n         \"status\": true,\n         \"delete_id\": null,\n         \"description\": \"\",\n         \"keyword\": \"\",\n         \"tag\": \"\",\n         \"publish\": true,\n         \"_id\": \"5d809d260b8fca1be4d8efaa\",\n         \"name\": \"Kiến thức kinh nghiệm\",\n         \"url_name\": \"kien-thuc-kinh-nghiem\",\n         \"sequence\": 18,\n         \"parent_id\": null,\n         \"__v\": 0\n     },\n     \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post_category.js",
    "groupTitle": "Post_Category"
  },
  {
    "type": "post",
    "url": "/product/add",
    "title": "Add New Product",
    "version": "0.1.0",
    "name": "AddNewProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Product Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Product Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "rating",
            "description": "<p>Product Rating.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Product Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "block",
            "description": "<p>Product Block.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "project_id",
            "description": "<p>Product Project ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ward_id",
            "description": "<p>Product Ward ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Product Address.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Product Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale_price",
            "description": "<p>Product Sale Price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sale_price_unit_id",
            "description": "<p>Sale Price Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale_price_rate",
            "description": "<p>Product Sale Price Rate.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "unit_price",
            "description": "<p>Product Unit Price.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency_unit_id",
            "description": "<p>Product Currency Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "land_area",
            "description": "<p>Product Land Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "land_area_unit_id",
            "description": "<p>Product Land Area Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "floor_area",
            "description": "<p>Product Floor Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "floor_area_unit_id",
            "description": "<p>Product Floor Area Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "planing_area",
            "description": "<p>Product Planing Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "planing_area_unit_id",
            "description": "<p>Product Planing Area Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lost_area",
            "description": "<p>Product Lost Area.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lost_area_unit_id",
            "description": "<p>Product Lost Area Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>Product Width.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "length",
            "description": "<p>Product Length.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "length_unit_id",
            "description": "<p>Product Length Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Product Location.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number_of_sheet",
            "description": "<p>Product Number Of Sheet.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number_of_parcel",
            "description": "<p>Product Number Of Parcel.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "investor_id",
            "description": "<p>Product Investor ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "handover_time",
            "description": "<p>Product Handover Time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cons_status",
            "description": "<p>Product Construction Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legal",
            "description": "<p>Product Legal.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "planning_category_id",
            "description": "<p>Product Planning Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "type_id",
            "description": "<p>Product Type ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "trans_time",
            "description": "<p>Product Transaction Time.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deposit",
            "description": "<p>Product Deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deposit_unit_id",
            "description": "<p>Product Deposit Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "monthly_payment",
            "description": "<p>Product Monthly Payment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_unit_id",
            "description": "<p>Product Payment Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "a_value",
            "description": "<p>Product Assess Value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "a_value_unit_id",
            "description": "<p>Product Assess Value Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "a_rent",
            "description": "<p>Product Assess Rent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "a_rent_unit_id",
            "description": "<p>Product Assess Rent Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feature",
            "description": "<p>Product Feature.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_road",
            "description": "<p>Product Access Road.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Product Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number_of_floor",
            "description": "<p>Product Number Of Floor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "floor_unit_id",
            "description": "<p>Product Floor Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bedroom",
            "description": "<p>Product Bedroom.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bedroom_unit_id",
            "description": "<p>Product Bedroom Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bathroom",
            "description": "<p>Product Bathroom.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bathroom_unit_id",
            "description": "<p>Product Bathroom Unit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Product Direction.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating_avg",
            "description": "<p>Product Rating Average.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Product Image.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sub_image",
            "description": "<p>Product Sub Image.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asset_rating",
            "description": "<p>Product Asset Rating.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "legal_id",
            "description": "<p>Product Legal ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "cons_design_info_id",
            "description": "<p>Product Construction Design Information ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "reaction",
            "description": "<p>Product Reaction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>Product Video.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "view_3d",
            "description": "<p>Product View 3D.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"create_date\" : ISODate(\"2019-10-30T09:25:39.720Z\"),\n     \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"write_date\" : ISODate(\"2019-10-30T09:25:39.720Z\"),\n     \"company_id\" : \"ROOT\",\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"rating\" : [ \n         ObjectId(\"5dbab8a1ebd384b5e4ecc346\")\n     ],\n     \"sub_image\" : [],\n     \"reaction\" : [ \n         ObjectId(\"5dbab8e1ebd384b5e4ecc347\")\n     ],\n     \"code\" : \"790210R59.66\",\n     \"points\" : {\n         \"type\" : \"Point\",\n         \"coordinates\" : [ \n             106.598439719, \n             10.7236330403\n         ]\n     },\n     \"polygons\" : {\n         \"type\" : \"Polygon\",\n         \"coordinates\" : [ \n             [ \n                 106.59852296896, \n                 10.7237122996829\n             ], \n             [ \n                 106.598482274637, \n                 10.7237402551087\n             ], \n             [ \n                 106.5984085698, \n                 10.7236337780764\n             ], \n             [ \n                 106.598382139624, \n                 10.7235972359238\n             ], \n             [ \n                 106.59838168097, \n                 10.7235966037003\n             ], \n             [ \n                 106.598361949844, \n                 10.7235692652095\n             ], \n             [ \n                 106.598355250794, \n                 10.7235599716154\n             ], \n             [ \n                 106.59840059731, \n                 10.7235285672896\n             ], \n             [ \n                 106.598428223584, \n                 10.7235678190996\n             ], \n             [ \n                 106.598428407045, \n                 10.723567998964\n             ], \n             [ \n                 106.598447313493, \n                 10.7235948886932\n             ], \n             [ \n                 106.59852296896, \n                 10.7237122996829\n             ]\n         ]\n     },\n     \"ward_id\" : ObjectId(\"5db94816b27d853b50b6642a\"),\n     \"category_id\" : ObjectId(\"5db2c448f835f22804d62d3c\"),\n     \"name\" : \"Nhà riêng Phường Tân Tạo A\",\n     \"land_area\" : 140.933,\n     \"land_area_unit_id\" : \"m2\",\n     \"lost_area\" : 0.0059967,\n     \"lost_area_unit_id\" : \"m2\",\n     \"location\" : \"790210R59.66 - Nhà riêng Phường Tân Tạo A\",\n     \"number_of_sheet\" : 59,\n     \"number_of_parcel\" : 66,\n     \"investor_id\" : \"IV.0000\",\n     \"cons_status\" : \"Đã bàn giao\",\n     \"planning_category_id\" : \"OTC\",\n     \"type_id\" : ObjectId(\"5d6e57310b4d9fd73db02be9\"),\n     \"__v\" : 0,\n     \"rating_avg\" : 4.5,\n     \"commnent\" : []\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "points",
            "description": "<p>Product Point.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "polygons",
            "description": "<p>Product Polygons.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/count",
    "title": "Count Number Of Product",
    "version": "0.1.0",
    "name": "CountNumberOfProduct",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  129146\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product.js",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/product/edit",
    "title": "Edit Product",
    "version": "0.1.0",
    "name": "EditProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Product ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Guide Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"id\": \"5db95715f4072a3eb02c3f48\",\n     \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"create_date\" : ISODate(\"2019-10-30T09:25:39.720Z\"),\n     \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"write_date\" : ISODate(\"2019-10-30T09:25:39.720Z\"),\n     \"company_id\" : \"ROOT\",\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"rating\" : [ \n         ObjectId(\"5dbab8a1ebd384b5e4ecc346\")\n     ],\n     \"sub_image\" : [],\n     \"reaction\" : [ \n         ObjectId(\"5dbab8e1ebd384b5e4ecc347\")\n     ],\n     \"code\" : \"790210R59.66\",\n     \"points\" : {\n         \"type\" : \"Point\",\n         \"coordinates\" : [ \n             106.598439719, \n             10.7236330403\n         ]\n     },\n     \"polygons\" : {\n         \"type\" : \"Polygon\",\n         \"coordinates\" : [ \n             [ \n                 106.59852296896, \n                 10.7237122996829\n             ], \n             [ \n                 106.598482274637, \n                 10.7237402551087\n             ], \n             [ \n                 106.5984085698, \n                 10.7236337780764\n             ], \n             [ \n                 106.598382139624, \n                 10.7235972359238\n             ], \n             [ \n                 106.59838168097, \n                 10.7235966037003\n             ], \n             [ \n                 106.598361949844, \n                 10.7235692652095\n             ], \n             [ \n                 106.598355250794, \n                 10.7235599716154\n             ], \n             [ \n                 106.59840059731, \n                 10.7235285672896\n             ], \n             [ \n                 106.598428223584, \n                 10.7235678190996\n             ], \n             [ \n                 106.598428407045, \n                 10.723567998964\n             ], \n             [ \n                 106.598447313493, \n                 10.7235948886932\n             ], \n             [ \n                 106.59852296896, \n                 10.7237122996829\n             ]\n         ]\n     },\n     \"ward_id\" : ObjectId(\"5db94816b27d853b50b6642a\"),\n     \"category_id\" : ObjectId(\"5db2c448f835f22804d62d3c\"),\n     \"name\" : \"Nhà riêng Phường Tân Tạo tại TPHCM\",\n     \"land_area\" : 140.933,\n     \"land_area_unit_id\" : \"m2\",\n     \"lost_area\" : 0.0059967,\n     \"lost_area_unit_id\" : \"m2\",\n     \"location\" : \"790210R59.66 - Nhà riêng Phường Tân Tạo A\",\n     \"number_of_sheet\" : 59,\n     \"number_of_parcel\" : 66,\n     \"investor_id\" : \"IV.0000\",\n     \"cons_status\" : \"Đã bàn giao\",\n     \"planning_category_id\" : \"OTC\",\n     \"type_id\" : ObjectId(\"5d6e57310b4d9fd73db02be9\"),\n     \"__v\" : 0,\n     \"rating_avg\" : 4.5,\n     \"commnent\" : []\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"true\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdIsNull",
            "description": "<p>The <code>id</code> of Resource is null.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PointWasNotCorrect",
            "description": "<p>The <code>Point</code> of Product was not correct.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PolygonWasNotCorrect",
            "description": "<p>The <code>Polygon</code> of Product was not correct.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"error\": \"ID is null\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"error\": \"sai tọa độ point\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"error\": \"sai tọa độ polygon\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/list",
    "title": "Get List Product",
    "version": "0.1.0",
    "name": "GetListProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n     {\n         _id: \"710801-P10.10\",\n         create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n         create_date: \"2019-08-31T04:49:51.125Z\",\n         write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n         write_date: \"2019-08-31T04:49:51.125Z\",\n         company_id: \"ROOT\",\n         status: 0,\n         delete_id: \"\",\n         code: \"710801-P10.10\",\n         name: \"\",\n         parent_id: \"\",\n         category_id: \"5db116febca3ae2b5816d0ad\",\n         unit_id: \"\",\n         type: \"\",\n         address: \"\",\n         length: 19.5,\n         width: 10,\n         height: 0,\n         notify_days: 0,\n         min_quantity: 0,\n         max_quantity: 0,\n         packaging: \"\",\n         preservation: \"\",\n         producer_id: \"\",\n         type_id: \"5d6e57310b4d9fd73db02be9\",\n         description: \"\",\n         formula: \"\",\n         manufacturer_code: \"\",\n         manufacturer_id: \"\",\n         url: \"\",\n         list_id: \"\",\n         barcode: \"\",\n         photo: \"\",\n         sequence: 0,\n         display_description: 0,\n         display_dimensions: 0,\n         version: \"\",\n         regulatory_code: \"\",\n         quantity: 0,\n         expiration_number: 0,\n         expiration_type: \"\",\n         points: {\n             type: \"Point\",\n             coordinates: [\n                 106.736522,\n                 10.633548\n             ]\n         },\n         polygons: {\n             type: \"Polygon\",\n             coordinates: [\n                 [\n                     [\n                         106.7365879112053,\n                         10.63348680104764\n                     ],\n                     [\n                         106.7365649789735,\n                         10.6336308844651\n                     ],\n                     [\n                         106.7364551606902,\n                         10.63361152193145\n                     ],\n                     [\n                         106.7364834763424,\n                         10.63346479991951\n                     ],\n                     [\n                         106.7365879112053,\n                         10.63348680104764\n                     ]\n                 ]\n             ]\n         },\n         keywords: \"\",\n         project_id: \"\",\n         currency_id: \"\",\n         unit_price: 0,\n         currency_unit_id: \"\",\n         bedroom: 2,\n         area: 194.9600067138672,\n         area_of_use: 0,\n         bathroom: 4,\n         number_of_floor: 3,\n         facade: 0,\n         east: 0,\n         west: 0,\n         south: 0,\n         north: 0,\n         east_north: 0,\n         west_north: 0,\n         east_south: 0,\n         west_south: 0,\n         tags: \"\",\n         block: \"\",\n         area_unit_id: \" m2 \",\n         length_unit_id: \" m \",\n         width_unit_id: \" m \",\n         height_unit_id: \"\",\n         bathroom_unit_id: \" WC \",\n         bedroom_unit_id: \" PN \",\n         toilet: 0,\n         toilet_unit_id: \"\",\n         direction: \"Tây Nam\",\n         location: \"710801-P10.10 - , Xã Hiệp Phước, Nhà Bè, TPHCM\",\n         access_road: \" Đường tiếp cận 24m (LG 8m) \",\n         investor_id: \"Nhà tự xây\",\n         handover_time: \"Sep-05\",\n         vat_unit_price: 0,\n         vat_unit_id: \"\",\n         a_value: 25.729999542236328,\n         a_value_unit_id: \" tỷ \",\n         a_rent: 42.88999938964844,\n         a_rent_unit_id: \" triệu / tháng \",\n         planning_area: 0,\n         planning_area_unit_id: \" m2 \",\n         lost_area: 0,\n         lost_area_unit_id: \" m2 \",\n         floor_area: 585,\n         floor_area_unit_id: \" m2 \",\n         legal: \"Sổ hồng\",\n         feature: \" Hẻm xe hơi \",\n         sale_price: 0,\n         sale_price_unit_id: \"\",\n         floor_unit_id: \" tầng \",\n         number_of_sheet: 10,\n         nubmer_of_parcel: 10,\n         ward: \"Xã Hiệp Phước\",\n         handover_status: \"\",\n         cons_status: \"Đã bàn giao\",\n         planning_category_id: \" ODT \",\n         transaction: \"Không giao dịch\",\n         trans_time: \"\",\n         deposit: 0,\n         deposit_unit_id: \"\",\n         monthly_payment: 0,\n         payment_unit_id: \"\",\n         sale_price_rate: 1,\n         sale_price_value: 0,\n         reaction: [ ],\n         asset_rating: 4.5,\n         rating: [\n             \"5d7a0e3940a5f81a4067147a\",\n             \"5d7af2afa8248722f84c30ff\"\n         ],\n         rating_avg: 3.5,\n         floor: 1,\n         status_detail: {\n             _id: \"5d6e57310b4d9fd73db02be9\",\n             create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n             create_date: \"2019-07-27T08:48:56.620Z\",\n             write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n             write_date: \"2019-07-27T08:48:56.620Z\",\n             company_id: \"ROOT\",\n             status: true,\n             delete_id: \"\",\n             type_name: \"Không giao dịch\",\n             type: \"\",\n             parent_id: \"\",\n             type_code: \"4\",\n             description: \"\",\n             marker_url: \"marker_bds_khongiaodich.png\",\n             marker_hover_url: \"marker_bds_ban_hover.svg\",\n             color_code: \"gray\"\n         }\n     }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/detail",
    "title": "Get Product Detail",
    "version": "0.1.0",
    "name": "GetProductDetail",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID of product item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5db95715f4072a3eb02c3f48\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Resource",
            "description": "<p>Detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\" : ObjectId(\"5db95715f4072a3eb02c3f48\"),\n    \"create_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"create_date\" : ISODate(\"2019-10-30T09:25:39.720Z\"),\n    \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n    \"write_date\" : ISODate(\"2019-10-30T09:25:39.720Z\"),\n    \"company_id\" : \"ROOT\",\n    \"status\" : true,\n    \"delete_id\" : null,\n    \"rating\" : [ \n        ObjectId(\"5dbab8a1ebd384b5e4ecc346\")\n    ],\n    \"sub_image\" : [],\n    \"reaction\" : [ \n        ObjectId(\"5dbab8e1ebd384b5e4ecc347\")\n    ],\n    \"code\" : \"790210R59.66\",\n    \"points\" : {\n        \"type\" : \"Point\",\n        \"coordinates\" : [ \n            106.598439719, \n            10.7236330403\n        ]\n    },\n    \"polygons\" : {\n        \"type\" : \"Polygon\",\n        \"coordinates\" : [ \n            [ \n                106.59852296896, \n                10.7237122996829\n            ], \n            [ \n                106.598482274637, \n                10.7237402551087\n            ], \n            [ \n                106.5984085698, \n                10.7236337780764\n            ], \n            [ \n                106.598382139624, \n                10.7235972359238\n            ], \n            [ \n                106.59838168097, \n                10.7235966037003\n            ], \n            [ \n                106.598361949844, \n                10.7235692652095\n            ], \n            [ \n                106.598355250794, \n                10.7235599716154\n            ], \n            [ \n                106.59840059731, \n                10.7235285672896\n            ], \n            [ \n                106.598428223584, \n                10.7235678190996\n            ], \n            [ \n                106.598428407045, \n                10.723567998964\n            ], \n            [ \n                106.598447313493, \n                10.7235948886932\n            ], \n            [ \n                106.59852296896, \n                10.7237122996829\n            ]\n        ]\n    },\n    \"ward_id\" : ObjectId(\"5db94816b27d853b50b6642a\"),\n    \"category_id\" : ObjectId(\"5db2c448f835f22804d62d3c\"),\n    \"name\" : \"Nhà riêng Phường Tân Tạo A\",\n    \"land_area\" : 140.933,\n    \"land_area_unit_id\" : \"m2\",\n    \"lost_area\" : 0.0059967,\n    \"lost_area_unit_id\" : \"m2\",\n    \"location\" : \"790210R59.66 - Nhà riêng Phường Tân Tạo A\",\n    \"number_of_sheet\" : 59,\n    \"number_of_parcel\" : 66,\n    \"investor_id\" : \"IV.0000\",\n    \"cons_status\" : \"Đã bàn giao\",\n    \"planning_category_id\" : \"OTC\",\n    \"type_id\" : ObjectId(\"5d6e57310b4d9fd73db02be9\"),\n    \"__v\" : 0,\n    \"rating_avg\" : 4.5,\n    \"commnent\" : []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/product/category/add",
    "title": "Add Product Category",
    "version": "0.1.0",
    "name": "AddProductCategory",
    "group": "Product_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Product Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Product Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_name",
            "description": "<p>Product Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Product Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Product Category Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Product Category Keyword.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Product Category Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Product Category Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type_id",
            "description": "<p>Product Category Type ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Product Category Start Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Product Category End Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_name",
            "description": "<p>Product Category Contact Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": "<p>Product Category Telephone Number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Product Category Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "attribute",
            "description": "<p>Product Category Attribute.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n       company_id: \"ROOT\",\n       attribute: [ ],\n       create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n       create_date: \"2019-07-10T13:19:36.294Z\",\n       write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n       write_date: \"2019-07-13T10:14:46.369Z\",\n       status: true,\n       delete_id: \"\",\n       parent_id: \"\",\n       category_name: \"CĂN HỘ CHUNG CƯ NEW\",\n       type: \"\",\n       code: \"APARTMENT\",\n       type_id: \"\",\n       start_date: null,\n       end_date: null,\n       contact_name: \"\",\n       tel: \"\",\n       email: \"\",\n       description: \"\",\n       sequence: \"1\",\n       keywords: \"\",\n       __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./product_category.js",
    "groupTitle": "Product_Category"
  },
  {
    "type": "get",
    "url": "/product/category/count",
    "title": "Count Number Of Product Category",
    "version": "0.1.0",
    "name": "CountNumberOfProductCategory",
    "group": "Product_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Product Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  13\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_category.js",
    "groupTitle": "Product_Category"
  },
  {
    "type": "delete",
    "url": "/product/category/delete",
    "title": "Delete Product Category",
    "version": "0.1.0",
    "name": "DeleteProductCategory",
    "group": "Product_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Product Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5db2c448f835f22804d62d33\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_category.js",
    "groupTitle": "Product_Category"
  },
  {
    "type": "get",
    "url": "/product/category/detail",
    "title": "Product Category Detail",
    "version": "0.1.0",
    "name": "DetailProductCategory",
    "group": "Product_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Product Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5db2c448f835f22804d62d33\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n     company_id: \"ROOT\",\n     attribute: [ ],\n     _id: \"5db2c448f835f22804d62d33\",\n     create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     create_date: \"2019-07-10T13:19:36.294Z\",\n     write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     write_date: \"2019-07-13T10:14:46.369Z\",\n     status: true,\n     delete_id: \"\",\n     parent_id: \"\",\n     category_name: \"CĂN HỘ CHUNG CƯ\",\n     type: \"\",\n     code: \"APART\",\n     type_id: \"\",\n     start_date: null,\n     end_date: null,\n     contact_name: \"\",\n     tel: \"\",\n     email: \"\",\n     description: \"\",\n     sequence: \"1\",\n     keywords: \"\",\n     __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_category.js",
    "groupTitle": "Product_Category"
  },
  {
    "type": "put",
    "url": "/product/category/edit",
    "title": "Edit Product Category",
    "version": "0.1.0",
    "name": "EditProductCategory",
    "group": "Product_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Product Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5db2c448f835f22804d62d33\",\n  \"category_name\": \"CĂN HỘ CHUNG CƯ NEW CITY\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdIsNull",
            "description": "<p>The <code>id</code> of Product Category is null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"error\": \"ID is null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_category.js",
    "groupTitle": "Product_Category"
  },
  {
    "type": "get",
    "url": "/product/category/list",
    "title": "Get List Product Category",
    "version": "0.1.0",
    "name": "GetListProductCategory",
    "group": "Product_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n        company_id: \"ROOT\",\n        attribute: [ ],\n        _id: \"5db2c448f835f22804d62d33\",\n        create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        create_date: \"2019-07-10T13:19:36.294Z\",\n        write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        write_date: \"2019-07-13T10:14:46.369Z\",\n        status: true,\n        delete_id: \"\",\n        parent_id: \"\",\n        category_name: \"CĂN HỘ CHUNG CƯ\",\n        type: \"\",\n        code: \"APART\",\n        type_id: \"\",\n        start_date: null,\n        end_date: null,\n        contact_name: \"\",\n        tel: \"\",\n        email: \"\",\n        description: \"\",\n        sequence: \"1\",\n        keywords: \"\",\n        __v: 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./product_category.js",
    "groupTitle": "Product_Category"
  },
  {
    "type": "post",
    "url": "/product/type/add",
    "title": "Add New Product Type",
    "version": "0.1.0",
    "name": "AddNewProductType",
    "group": "Product_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Product Type Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Product Type Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type_name",
            "description": "<p>Product Type Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Product Type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Product Type Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type_code",
            "description": "<p>Product Type Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marker_url",
            "description": "<p>Product Type Marker URL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marker_hover_url",
            "description": "<p>Product Type Marker Hover URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color_code",
            "description": "<p>Product Type Color Code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n      \"create_uid\" : \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n      \"create_date\" : ISODate(\"2019-07-27T06:09:00.176Z\"),\n      \"write_uid\" : \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n      \"write_date\" : ISODate(\"2019-08-26T08:51:52.848Z\"),\n      \"company_id\" : \"ROOT\",\n      \"status\" : 0,\n      \"delete_id\" : \"\",\n      \"type_name\" : \"Bán\",\n      \"type\" : \"\",\n      \"parent_id\" : \"\",\n      \"type_code\" : \"1\",\n      \"description\" : \"\",\n      \"marker_url\" : \"marker_bds_ban.svg\",\n      \"marker_hover_url\" : \"marker_bds_ban_hover.svg\",\n      \"color_code\" : \"#E91B23\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "number",
            "description": "<p>List of Project Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_type.js",
    "groupTitle": "Product_Type"
  },
  {
    "type": "get",
    "url": "/product/type/count",
    "title": "Count Number Of Product Type",
    "version": "0.1.0",
    "name": "CountNumberOfProductType",
    "group": "Product_Type",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Product Type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_type.js",
    "groupTitle": "Product_Type"
  },
  {
    "type": "delete",
    "url": "/product/type/delete",
    "title": "Delete Product Type",
    "version": "0.1.0",
    "name": "DeleteProductType",
    "group": "Product_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Product Type ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d8345efa2178d987366fdef\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_type.js",
    "groupTitle": "Product_Type"
  },
  {
    "type": "get",
    "url": "/product/type/detail",
    "title": "Product Type Detail",
    "version": "0.1.0",
    "name": "DetailProductType",
    "group": "Product_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Product Type ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d6e56c88e18e6eaf5076069\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": " {\n      \"_id\" : ObjectId(\"5d6e56c88e18e6eaf5076069\"),\n      \"create_uid\" : \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n      \"create_date\" : ISODate(\"2019-07-27T06:09:00.176Z\"),\n      \"write_uid\" : \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n      \"write_date\" : ISODate(\"2019-08-26T08:51:52.848Z\"),\n      \"company_id\" : \"ROOT\",\n      \"status\" : 0,\n      \"delete_id\" : \"\",\n      \"type_name\" : \"Bán\",\n      \"type\" : \"\",\n      \"parent_id\" : \"\",\n      \"type_code\" : \"1\",\n      \"description\" : \"\",\n      \"marker_url\" : \"marker_bds_ban.svg\",\n      \"marker_hover_url\" : \"marker_bds_ban_hover.svg\",\n      \"color_code\" : \"#E91B23\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./product_type.js",
    "groupTitle": "Product_Type"
  },
  {
    "type": "get",
    "url": "/product/type/list",
    "title": "Get List Of Product Type",
    "version": "0.1.0",
    "name": "GetListOfProductType",
    "group": "Product_Type",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Product Type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   {\n        company_id: \"ROOT\",\n        parend_id: null,\n        _id: \"5d6e56c88e18e6eaf5076069\",\n        create_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        create_date: \"2019-07-27T06:09:00.176Z\",\n        write_uid: \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n        write_date: \"2019-08-26T08:51:52.848Z\",\n        status: false,\n        delete_id: \"\",\n        type_name: \"Bán\",\n        type: \"\",\n        parent_id: \"\",\n        type_code: \"1\",\n        description: \"\",\n        marker_url: \"marker_bds_ban.svg\",\n        marker_hover_url: \"marker_bds_ban_hover.svg\",\n        color_code: \"#E91B23\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./product_type.js",
    "groupTitle": "Product_Type"
  },
  {
    "type": "get",
    "url": "/project/count",
    "title": "Count Project",
    "version": "0.1.0",
    "name": "CountProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter Project By.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"filter\": {\"keyword\":\"apartment\"}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Project.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  25\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./project.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/project/list",
    "title": "Get List Project",
    "version": "0.1.0",
    "name": "GetListProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter Project By.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sort",
            "description": "<p>Sort Project By.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 2,\n  \"limit\": 10,\n  \"filter\": {\"keyword\":\"my phu apartment\"},\n  \"sort\": {\"a_price_value\":-1}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Project.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n  {\n      \"_id\": \"5d888d1d73f4fc01e64aa83f\",\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-08-25T15:13:30.954Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-08-25T15:13:30.954Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": 0,\n      \"delete_id\": \"\",\n      \"parent_id\": \"\",\n      \"status_id\": \"5d844eed73f4fc01e646f773\",\n      \"priority_id\": \"\",\n      \"start_date\": null,\n      \"end_date\": null,\n      \"description\": \"\",\n      \"percentage\": 0,\n      \"name\": \"KHU CĂN HỘ BLUE SAPPHIRE PHÚ XUÂN\",\n      \"code\": \"7108-P.05.6\",\n      \"keyworks\": \"\",\n      \"category_id\": \"5d8345fca2178d987366ff40\",\n      \"points\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n              106.739236657367,\n              10.6853174908685\n          ]\n      },\n      \"polygons\": {\n          \"type\": \"Polygon\",\n          \"coordinates\": [\n              [\n                  [\n                      106.7413520063106,\n                      10.68443250106499\n                  ],\n                  [\n                      106.7405810629087,\n                      10.68733661380209\n                  ],\n                  [\n                      106.7370692192793,\n                      10.68620253259754\n                  ],\n                  [\n                      106.7380086481574,\n                      10.68330596014453\n                  ],\n                  [\n                      106.7413520063106,\n                      10.68443250106499\n                  ]\n              ]\n          ]\n      },\n      \"currency_id\": \"\",\n      \"unit_price\": 0,\n      \"currency_unit_id\": \"\",\n      \"handover_before\": 0,\n      \"handover_after\": 0,\n      \"tags\": \"\",\n      \"location\": \"7108-P.05.6 - Xã Phú Xuân - huyện Nhà Bè - Tp. HCM.\",\n      \"investor_id\": \"COTEC LAND & COTEC GROUP\",\n      \"project_status\": \" Chưa thi công \",\n      \"legal\": \"Không có thông tin\",\n      \"land_type\": \"ODT\",\n      \"land_area\": \" 9,171.0 \",\n      \"land_unit_id\": \" m2 \",\n      \"block\": 2,\n      \"floor\": 25,\n      \"floor_unit_id\": \" tầng \",\n      \"ch\": 592,\n      \"ch_unit_id\": \" CH \",\n      \"sh\": 23,\n      \"sh_unit_id\": \" SH \",\n      \"oft\": 144,\n      \"oft_unit_id\": \" OFT \",\n      \"tmdv\": 5,\n      \"tmdv_unit_id\": \" m2 TMDV \",\n      \"a_value\": 51.5,\n      \"a_value_unit_id\": \" triệu/m2 \",\n      \"a_rent\": 15.5,\n      \"a_rent_unit_id\": \" triệu / tháng căn 1PN \",\n      \"access_road\": \" Đường vào: 35m (LG: 40m) \",\n      \"characteristics\": \"KHU CĂN HỘ BLUE SAPPHIRE PHÚ XUÂN là DỰ ÁN CHUNG CƯ tọa lạc tại 7108-P.05.6 - Xã Phú Xuân - huyện Nhà Bè - Tp. HCM. được phát triển bởi COTEC LAND & COTEC GROUP, có diện tích 9171m2\",\n      \"legal_group\": \"1                                   \",\n      \"sale_status\": \"\",\n      \"sale_unit_price\": 0,\n      \"sale_price_unit_id\": \"\",\n      \"deposit\": 0,\n      \"deposit_unit_id\": \"\",\n      \"payment\": 0,\n      \"payment_unit_id\": \"\",\n      \"handover_condition\": \"Bàn giao nội thất cơ bản\",\n      \"design_type\": \"Hướng ngoại\",\n      \"design_style\": \"Cổ điển\",\n      \"design_standard\": \"LOTUS\",\n      \"contractor\": \"Fcons\",\n      \"designer\": \"TTID\",\n      \"manager\": \"CBRE\",\n      \"management_fee\": 17,\n      \"management_fee_unit_id\": \" / m2 sàn\",\n      \"main_project\": 1,\n      \"block_unit_id\": \" block \",\n      \"address\": \"\",\n      \"handover_date\": \"Nov-22\",\n      \"a_value_rate\": 1,\n      \"photo\": \"\",\n      \"a_price_value\": 51.5,\n      \"reaction\": [],\n      \"keyword\": \"KHU CĂN HỘ BLUE SAPPHIRE PHÚ XUÂN khu can ho blue sapphire phu xuan\",\n      \"status_detail\": {\n          \"_id\": \"5d844eed73f4fc01e646f773\",\n          \"create_uid\": \"1\",\n          \"create_date\": \"2017-10-10T07:44:31.169Z\",\n          \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n          \"write_date\": \"2019-07-27T06:40:53.360Z\",\n          \"company_id\": \"ROOT\",\n          \"status\": true,\n          \"delete_id\": \"\",\n          \"status_name\": \"Chưa thi công\",\n          \"order_by\": 3,\n          \"percentage\": 1,\n          \"parent_id\": \"5d6fa6a1d6bfa6bf87bea141\",\n          \"marker_url\": \"Marker_chualam.svg\",\n          \"marker_hover_url\": \"marker_bds_ban_hover.svg\"\n      },\n      \"category\": {\n          \"_id\": \"5d8345fca2178d987366ff40\",\n          \"create_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n          \"create_date\": \"2019-07-10T13:01:26.263Z\",\n          \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n          \"write_date\": \"2019-09-03T02:08:44.647Z\",\n          \"company_id\": \"ROOT\",\n          \"status\": 0,\n          \"delete_id\": \"d5ea172e-dc05-4539-b77d-a70a5cda3ed3\",\n          \"category_name\": \"DỰ ÁN CHUNG CƯ\",\n          \"parent_id\": \"\",\n          \"category_code\": \"APROJ\",\n          \"sequence\": 1,\n          \"keyworks\": \"\",\n          \"description\": \"\"\n      }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/project/category/add",
    "title": "Add Project Category",
    "version": "0.1.0",
    "name": "AddProjectCategory",
    "group": "Project_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Project Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Project Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_name",
            "description": "<p>Project Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Project Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_code",
            "description": "<p>Project Category Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Project Category Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Project Category Keyword.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Project Category Description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": true,\n  \"delete_id\": \"\",\n  \"category_name\": \"DỰ ÁN PHỨC HỢP\",\n  \"parent_id\": null,\n  \"category_code\": \"MPROJ\",\n  \"sequence\": 4.0,\n  \"keyword\": \"\",\n  \"description\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_category.js",
    "groupTitle": "Project_Category"
  },
  {
    "type": "get",
    "url": "/project/category/count",
    "title": "Count Project Category",
    "version": "0.1.0",
    "name": "CountProjectCategory",
    "group": "Project_Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n    4\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./project_category.js",
    "groupTitle": "Project_Category"
  },
  {
    "type": "delete",
    "url": "/post/category/delete",
    "title": "Delete Post Category",
    "version": "0.1.0",
    "name": "DeletePostCategory",
    "group": "Project_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Project Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d8345efa2178d987366fdef\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./post_category.js",
    "groupTitle": "Project_Category"
  },
  {
    "type": "delete",
    "url": "/project/category/delete",
    "title": "Delete Project Category",
    "version": "0.1.0",
    "name": "DeleteProjectCategory",
    "group": "Project_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Project Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d8345efa2178d987366fdef\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_category.js",
    "groupTitle": "Project_Category"
  },
  {
    "type": "get",
    "url": "/project/category/detail",
    "title": "Project Category Detail",
    "version": "0.1.0",
    "name": "DetailProjectCategory",
    "group": "Project_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Project Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d8345efa2178d987366fdef\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n \"create_uid\": \"5d679819325ab70ab0157ce5\",\n \"create_date\": \"2019-07-10T13:01:26.263Z\",\n \"write_uid\": \"5d679819325ab70ab0157ce5\",\n \"write_date\": \"2019-09-03T02:08:44.647Z\",\n \"company_id\": \"ROOT\",\n \"status\": false,\n \"delete_id\": null,\n \"parent_id\": null,\n \"_id\": \"5d8345fca2178d987366ff40\",\n \"category_name\": \"DỰ ÁN CHUNG CƯ\",\n \"category_code\": \"APROJ\",\n \"sequence\": 1,\n \"keyworks\": \"\",\n \"description\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./project_category.js",
    "groupTitle": "Project_Category"
  },
  {
    "type": "put",
    "url": "/project/category/edit",
    "title": "Edit Project Category",
    "version": "0.1.0",
    "name": "EditProjectCategory",
    "group": "Project_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Project Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cateogry_name",
            "description": "<p>Project Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d8345efa2178d987366fdef\",\n  \"category_name\": \"DỰ ÁN PHỨC HỢP\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_category.js",
    "groupTitle": "Project_Category"
  },
  {
    "type": "get",
    "url": "/project/category/list",
    "title": "List Project Category",
    "version": "0.1.0",
    "name": "ListProjectCategory",
    "group": "Project_Category",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   {\n     \"create_uid\": \"5d679819325ab70ab0157ce5\",\n     \"create_date\": \"2019-08-23T14:00:05.160Z\",\n     \"write_uid\": \"5d679819325ab70ab0157ce5\",\n     \"write_date\": \"2019-08-23T14:00:05.160Z\",\n     \"company_id\": \"ROOT\",\n     \"status\": false,\n     \"delete_id\": null,\n     \"parent_id\": null,\n     \"_id\": \"5d8345efa2178d987366fdef\",\n     \"category_name\": \"DỰ ÁN PHỨC HỢP\",\n     \"category_code\": \"MPROJ\",\n     \"sequence\": 4,\n     \"keyworks\": \"\",\n     \"description\": \"\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_category.js",
    "groupTitle": "Project_Category"
  },
  {
    "type": "post",
    "url": "/project/status/add",
    "title": "Add New Project Status",
    "version": "0.1.0",
    "name": "AddNewProjectStatus",
    "group": "Project_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Project Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Project Status Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status_name",
            "description": "<p>Project Status Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_by",
            "description": "<p>Project Status Order By.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "percentage",
            "description": "<p>Project Status Percentage.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Project Status Image URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Project Status Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Project Parent ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"status\": true,\n   \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-26T03:24:44.666Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-26T03:24:44.666Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"image_url\": \"\",\n      \"sequence\": 0,\n      \"parent_id\": null,\n      \"_id\": \"5d8c311f3549af16a4919697\",\n      \"status_name\": \"Mới\",\n      \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "number",
            "description": "<p>List of Project Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_status.js",
    "groupTitle": "Project_Status"
  },
  {
    "type": "get",
    "url": "/project/status/count",
    "title": "Count Number Of Project Status",
    "version": "0.1.0",
    "name": "CountNumberOfProjectStatus",
    "group": "Project_Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Project Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  9\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./project_status.js",
    "groupTitle": "Project_Status"
  },
  {
    "type": "delete",
    "url": "/project/status/delete",
    "title": "Delete Project Status",
    "version": "0.1.0",
    "name": "DeleteProjectStatus",
    "group": "Project_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Project Status ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d6fa6a1d6bfa6bf87bea141\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_status.js",
    "groupTitle": "Project_Status"
  },
  {
    "type": "put",
    "url": "/project/status/edit",
    "title": "Edit Project Status",
    "version": "0.1.0",
    "name": "EditProjectStatus",
    "group": "Project_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Project Status ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status_name",
            "description": "<p>Project Status Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d6fa6a1d6bfa6bf87bea141\",\n  \"status_name\": \"Đã bàn giao\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_status.js",
    "groupTitle": "Project_Status"
  },
  {
    "type": "get",
    "url": "/project/status/list",
    "title": "Get List Of Project Status",
    "version": "0.1.0",
    "name": "GetListOfProjectStatus",
    "group": "Project_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>Filter Project Status By.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 2,\n  \"limit\": 10,\n  \"filter\": {\"keyword\":\"my phu apartment\"}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Project Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   {\n     \"create_uid\": \"5d679819325ab70ab0157ce5\",\n     \"create_date\": \"2017-10-10T07:44:48.110Z\",\n     \"write_uid\": \"5d679819325ab70ab0157ce5\",\n     \"write_date\": \"2019-07-27T06:40:38.906Z\",\n     \"company_id\": \"ROOT\",\n     \"status\": true,\n     \"delete_id\": null,\n     \"image_url\": \"\",\n     \"sequence\": 0,\n     \"parent_id\": null,\n     \"_id\": \"5d6fa65bd4f342d9840972ca\",\n     \"status_name\": \"Đã bàn giao\",\n     \"order_by\": 2,\n     \"percentage\": 0.980000019073486,\n     \"marker_url\": \"marker_duan.svg\",\n     \"marker_hover_url\": \"marker_bds_ban_hover.svg\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_status.js",
    "groupTitle": "Project_Status"
  },
  {
    "type": "get",
    "url": "/project/status/list_tree",
    "title": "Get List Tree Of Project Status",
    "version": "0.1.0",
    "name": "GetListTreeOfProjectStatus",
    "group": "Project_Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Project Status List Tree.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[  \n   {\n     \"_id\": \"5d6fa6a1d6bfa6bf87bea141\",\n     \"create_uid\": \"1\",\n     \"create_date\": \"2017-10-10T07:44:31.169Z\",\n     \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n     \"write_date\": \"2019-07-27T06:40:53.360Z\",\n     \"company_id\": \"ROOT\",\n     \"status\": true,\n     \"delete_id\": \"\",\n     \"status_name\": \"Chưa làm\",\n     \"order_by\": 3,\n     \"percentage\": 1,\n     \"parent_id\": null,\n     \"marker_url\": \"Marker_chualam.svg\",\n     \"marker_hover_url\": \"marker_bds_ban_hover.svg\",\n     \"children\": [\n         {\n             \"_id\": \"5d844eed73f4fc01e646f773\",\n             \"create_uid\": \"1\",\n             \"create_date\": \"2017-10-10T07:44:31.169Z\",\n             \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n             \"write_date\": \"2019-07-27T06:40:53.360Z\",\n             \"company_id\": \"ROOT\",\n             \"status\": true,\n             \"delete_id\": \"\",\n             \"status_name\": \"Chưa thi công\",\n             \"order_by\": 3,\n             \"percentage\": 1,\n             \"parent_id\": \"5d6fa6a1d6bfa6bf87bea141\",\n             \"marker_url\": \"Marker_chualam.svg\",\n             \"marker_hover_url\": \"marker_bds_ban_hover.svg\"\n         }\n     ]\n   } \n]",
          "type": "json"
        }
      ]
    },
    "filename": "./project_status.js",
    "groupTitle": "Project_Status"
  },
  {
    "type": "get",
    "url": "/project/status/detail",
    "title": "Project Status Detail",
    "version": "0.1.0",
    "name": "ProjectStatusDetail",
    "group": "Project_Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Project Status ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d6fa6a1d6bfa6bf87bea141\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n \"_id\": \"5d6fa6a1d6bfa6bf87bea141\",\n \"create_uid\": \"1\",\n \"create_date\": \"2017-10-10T07:44:31.169Z\",\n \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n \"write_date\": \"2019-07-27T06:40:53.360Z\",\n \"company_id\": \"ROOT\",\n \"status\": true,\n \"delete_id\": \"\",\n \"status_name\": \"Chưa làm\",\n \"order_by\": 3,\n \"percentage\": 1,\n \"parent_id\": null,\n \"marker_url\": \"Marker_chualam.svg\",\n \"marker_hover_url\": \"marker_bds_ban_hover.svg\",\n \"children\": [\n     {\n         \"_id\": \"5d844eed73f4fc01e646f773\",\n         \"create_uid\": \"1\",\n         \"create_date\": \"2017-10-10T07:44:31.169Z\",\n         \"write_uid\": \"b01e6241-0488-40b1-bc53-525050cd6d58\",\n         \"write_date\": \"2019-07-27T06:40:53.360Z\",\n         \"company_id\": \"ROOT\",\n         \"status\": true,\n         \"delete_id\": \"\",\n         \"status_name\": \"Chưa thi công\",\n         \"order_by\": 3,\n         \"percentage\": 1,\n         \"parent_id\": \"5d6fa6a1d6bfa6bf87bea141\",\n         \"marker_url\": \"Marker_chualam.svg\",\n         \"marker_hover_url\": \"marker_bds_ban_hover.svg\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingProjectstatusID",
            "description": "<p>Missing Project status <code>id</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Missing Project status ID\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./project_status.js",
    "groupTitle": "Project_Status"
  },
  {
    "type": "post",
    "url": "/recruit/add",
    "title": "Add New Recruit",
    "version": "0.1.0",
    "name": "AddNewRecruit",
    "group": "Recruit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Recruit Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Recruit Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Recruit Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Recruit Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Recruit Content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Recruit URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Recruit Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Recruit Keyword.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n   \"status\": true,\n   \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-26T03:24:44.666Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-26T03:24:44.666Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"image_url\": \"\",\n      \"sequence\": 0,\n      \"content\": \"\",\n      \"url_name\": \"\",\n      \"keyword\": \"\",\n      \"description\": \"\",\n      \"category_id\": \"5d7f313e2c69582d740b7afd\",\n      \"_id\": \"5d8c311f3549af16a4919697\",\n      \"name\": \"CEO ASSISTANRT\",\n      \"__v\": 0\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Recruit Description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": "<p>Recruit Image URL.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit.js",
    "groupTitle": "Recruit"
  },
  {
    "type": "get",
    "url": "/recruit/count",
    "title": "Count Number Of Recruit",
    "version": "0.1.0",
    "name": "CountNumberOfRecruit",
    "group": "Recruit",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Project Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  17\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit.js",
    "groupTitle": "Recruit"
  },
  {
    "type": "delete",
    "url": "/recruit/delete",
    "title": "Delete Recruit",
    "version": "0.1.0",
    "name": "DeleteRecruit",
    "group": "Recruit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Recruit ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d7f471d6301901a2875a842\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit.js",
    "groupTitle": "Recruit"
  },
  {
    "type": "put",
    "url": "/recruit/edit",
    "title": "Edit Recruit",
    "version": "0.1.0",
    "name": "EditRecruit",
    "group": "Recruit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Recruit ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Recruit Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d7f471d6301901a2875a842\",\n  \"name\": \"PHÁT TRIỂN THỊ TRƯỜNG\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit.js",
    "groupTitle": "Recruit"
  },
  {
    "type": "get",
    "url": "/recruit/all",
    "title": "Get All Recruit",
    "version": "0.1.0",
    "name": "GetAllRecruit",
    "group": "Recruit",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of All Recruit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        _id: \"5d7f313e2c69582d740b7afd\",\n        create_uid: \"5d679819325ab70ab0157ce5\",\n        create_date: \"2019-09-16T06:51:33.828Z\",\n        write_uid: \"5d679819325ab70ab0157ce5\",\n        write_date: \"2019-09-16T06:51:33.828Z\",\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        parent_id: null,\n        name: \"TUYỂN DỤNG NHÂN VIÊN\",\n        __v: 0,\n        sequence: 2,\n        item: [\n            {\n                _id: \"5d7f471d6301901a2875a842\",\n                create_uid: \"5d679819325ab70ab0157ce5\",\n                create_date: \"2019-09-16T08:26:05.935Z\",\n                write_uid: \"5d679819325ab70ab0157ce5\",\n                write_date: \"2019-10-07T02:12:01.271Z\",\n                company_id: \"ROOT\",\n                status: true,\n                category_id: [\n                    \"5d7f313e2c69582d740b7afd\"\n                ],\n                sequence: 1,\n                content: \"<p><strong>Job description:</strong></p><ul><li>Assisting the Executive Director as an online operator with all day-to-day issues including preparing and coordinating communications as well as managing complex calendars with a constantly changing schedule.</li><li>Interacting with senior managers and important executive groups (reporting directly to the CEO) to follow up all special projects and initiatives.</li><li>Actively managing and prioritizing access to the CEO with grace and diplomacy; being responsible for his calendar.</li><li>Traveling with CEO whenever needed, especially scheduled Council meetings.</li><li>Planning as required by the CEO.</li></ul><p><strong>About you:</strong></p><ul><li>At least 03 years of experience working as Assistant of CEO or Chairman.</li><li>Bachelor’s Degree from accredited College/University.</li><li>Ability to deal with senior managing directors and manage those relationships gracefully with acumen.</li><li>Well-organized, detail-oriented and bold.</li></ul><p><strong>What we offer:</strong></p><ul><li>Salary: as agreement.</li><li>Full - time.</li><li>Health insurance.</li><li>Bonus.</li></ul><p><strong>Our contact:</strong></p><p>Address: 216 Nguyen Hoang Street, An Phu Ward, District 2, Ho Chi Minh City.</p><p>Contact number: 028 6281 1205</p><p>Email: hr@asset.vn (Ms. Thủy).</p>\",\n                url_name: \"ceo-assistant\",\n                keyword: \"\",\n                description: \"\",\n                image_url: \"images/Recruit/ceoassisstant1568629805057.png\",\n                name: \"CEO ASSISTANT\",\n                __v: 0\n            },\n            {},\n            {},\n            {}\n        ]\n    },\n    {},\n    {}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit.js",
    "groupTitle": "Recruit"
  },
  {
    "type": "get",
    "url": "/recruit/list",
    "title": "Get List Recruit",
    "version": "0.1.0",
    "name": "GetListRecruit",
    "group": "Recruit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"_id\": \"5d7f5e6c931dfb14d43a5c27\",\n     \"create_uid\": \"5d679819325ab70ab0157ce5\",\n     \"create_date\": \"2019-09-16T10:05:32.805Z\",\n     \"write_uid\": \"5d679819325ab70ab0157ce5\",\n     \"write_date\": \"2019-10-07T02:10:30.733Z\",\n     \"company_id\": \"ROOT\",\n     \"status\": true,\n     \"category_id\": [\n         \"5d7f314b2c69582d740b7afe\"\n     ],\n     \"sequence\": 4,\n     \"content\": \"<p class=\\\"ql-align-justify\\\"><strong>About you:</strong></p><ul><li class=\\\"ql-align-justify\\\">Sinh viên năm 3, 4 chuyên ngành liên quan đến Web Developer.</li><li class=\\\"ql-align-justify\\\">Có kiến thức về: Javascript, nodejs, java, reactjs. Express framework. PostgreSQL, MySQL, Mongodb. HTML/CSS. Google Map.</li><li class=\\\"ql-align-justify\\\">Năng động, giao tiếp tốt, cẩn thận, quyết đoán, trung thực nhiệt huyết với công việc.</li></ul><p class=\\\"ql-align-justify\\\"><strong>Job description:</strong></p><ul><li class=\\\"ql-align-justify\\\">Làm việc với trưởng nhóm lập trình để xây dựng hệ thống website bất động sản.</li><li class=\\\"ql-align-justify\\\">Lập kế hoạch và báo cáo cho trưởng nhóm về tiến độ công việc.</li><li class=\\\"ql-align-justify\\\">Nghiên cứu, học hỏi công nghệ mới để đáp ứng nhu cầu công việc.</li></ul><p class=\\\"ql-align-justify\\\"><strong>What we offer:</strong></p><ul><li class=\\\"ql-align-justify\\\">Được hướng dẫn, đào tạo thực tế chuyên môn.</li><li class=\\\"ql-align-justify\\\">Được hưởng phụ cấp theo năng lực.</li><li class=\\\"ql-align-justify\\\">Có cơ hội trở thành nhân viên chính thức của Công ty.</li></ul><p class=\\\"ql-align-justify\\\"><strong>Our contact:</strong></p><ul><li class=\\\"ql-align-justify\\\">Địa chỉ: 216 Nguyễn Hoàng, KP. 5, P. An Phú, Q. 2, TP. HCM.</li><li class=\\\"ql-align-justify\\\">Số điện thoại liên hệ: (028) 6281 1205.</li><li class=\\\"ql-align-justify\\\">Email: hr@asset.vn</li></ul>\",\n     \"url_name\": \"thuc-tap-sinh-web-developer\",\n     \"keyword\": \"\",\n     \"description\": \"\",\n     \"image_url\": \"images/Recruit/ttswebdev1568629831372.png\",\n     \"name\": \"THỰC TẬP SINH WEB DEVELOPER\",\n     \"__v\": 0,\n     \"category\": {\n         \"_id\": \"5d7f314b2c69582d740b7afe\",\n         \"name\": \"TUYỂN DỤNG THỰC TẬP SINH\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit.js",
    "groupTitle": "Recruit"
  },
  {
    "type": "get",
    "url": "/recruit/detail",
    "title": "Get Recruit Detail",
    "version": "0.1.0",
    "name": "GetRecruitDetail",
    "group": "Recruit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID of recruit item .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5d7f4af86301901a2875a843\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"create_uid\": null,\n \"create_date\": \"2019-09-16T08:42:32.176Z\",\n \"write_uid\": \"5d679819325ab70ab0157ce5\",\n \"write_date\": \"2019-09-16T08:25:52.279Z\",\n \"company_id\": \"ROOT\",\n \"status\": false,\n \"category_id\": null,\n \"sequence\": 0,\n \"content\": \"<p><img src=\\\"http://localhost:7777/images/pexels-photo-2606383.jpeg\\\" height=\\\"auto\\\" width=\\\"200\\\"></p><p><br></p><p>Không có dữ liệu bla bla bla</p><p>abc xypz</p>\",\n \"url_name\": \"nhan-vien-nhap-lieu\",\n \"keyword\": \"abc\",\n \"description\": \"\",\n \"image_url\": \"images/Post/95475dc0-7a06-4d6e-82ca-e972ea36445f.jpg\",\n \"_id\": \"5d7f4af86301901a2875a843\",\n \"name\": \"NHÂN VIÊN NHẬP LIỆU\",\n \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit.js",
    "groupTitle": "Recruit"
  },
  {
    "type": "post",
    "url": "/recruit/category/add",
    "title": "Add New Recruit Category",
    "version": "0.1.0",
    "name": "AddNewRecruitCategory",
    "group": "Recruit_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Recruit Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Recruit Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Recruit Category Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Recruit Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Recruit Category Sequence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"status\": true,\n  \"data\": {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-10-11T01:56:35.189Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-10-11T01:56:35.189Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 0,\n      \"_id\": \"5d9fe168f8d47413b4d7bf38\",\n      \"name\": \"TUYỂN DỤNG THỰC TẬP SINH\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit_category.js",
    "groupTitle": "Recruit_Category"
  },
  {
    "type": "get",
    "url": "/recruit/category/count",
    "title": "Count Number Of Recruit Category",
    "version": "0.1.0",
    "name": "CountNumberOfRecruitCategory",
    "group": "Recruit_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit_category.js",
    "groupTitle": "Recruit_Category"
  },
  {
    "type": "delete",
    "url": "/recruit/category/delete",
    "title": "Delete Recruit Category",
    "version": "0.1.0",
    "name": "DeleteRecruitCategory",
    "group": "Recruit_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Recruit Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d7f313e2c69582d740b7afd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit_category.js",
    "groupTitle": "Recruit_Category"
  },
  {
    "type": "put",
    "url": "/recruit/category/edit",
    "title": "Edit Recruit Category",
    "version": "0.1.0",
    "name": "EditRecruitCategory",
    "group": "Recruit_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Recruit Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Recruit Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d7f313e2c69582d740b7afd\",\n  \"name\": \"TUYỂN DỤNG NHÂN VIÊN TẠM THỜI\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit_category.js",
    "groupTitle": "Recruit_Category"
  },
  {
    "type": "get",
    "url": "/recruit/category/all",
    "title": "Get All Recruit Category",
    "version": "0.1.0",
    "name": "GetAllRecruitCategory",
    "group": "Recruit_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>All of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-16T06:51:33.828Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-16T06:51:33.828Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 2,\n      \"_id\": \"5d7f313e2c69582d740b7afd\",\n      \"name\": \"TUYỂN DỤNG NHÂN VIÊN\",\n      \"__v\": 0\n  },\n  {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-16T06:51:33.828Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-16T06:51:33.828Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 1,\n      \"_id\": \"5d7f314b2c69582d740b7afe\",\n      \"name\": \"TUYỂN DỤNG THỰC TẬP SINH\",\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit_category.js",
    "groupTitle": "Recruit_Category"
  },
  {
    "type": "get",
    "url": "/recruit/category/list",
    "title": "Get List Recruit Category",
    "version": "0.1.0",
    "name": "GetListRecruitCategory",
    "group": "Recruit_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-16T06:51:33.828Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-16T06:51:33.828Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 2,\n      \"_id\": \"5d7f313e2c69582d740b7afd\",\n      \"name\": \"TUYỂN DỤNG NHÂN VIÊN\",\n      \"__v\": 0\n  },\n  {\n      \"create_uid\": \"5d679819325ab70ab0157ce5\",\n      \"create_date\": \"2019-09-16T06:51:33.828Z\",\n      \"write_uid\": \"5d679819325ab70ab0157ce5\",\n      \"write_date\": \"2019-09-16T06:51:33.828Z\",\n      \"company_id\": \"ROOT\",\n      \"status\": true,\n      \"delete_id\": null,\n      \"parent_id\": null,\n      \"sequence\": 1,\n      \"_id\": \"5d7f314b2c69582d740b7afe\",\n      \"name\": \"TUYỂN DỤNG THỰC TẬP SINH\",\n      \"__v\": 0\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./recruit_category.js",
    "groupTitle": "Recruit_Category"
  },
  {
    "type": "post",
    "url": "/resource/add",
    "title": "Add New Resource",
    "version": "0.1.0",
    "name": "AddNewResource",
    "group": "Resource",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Resource Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Resource Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Resource Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Resource Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Resource Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url_name",
            "description": "<p>Resource URL Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sequence",
            "description": "<p>Resource Sequence.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "document_url",
            "description": "<p>Resource Document URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "reaction",
            "description": "<p>Resource Reaction.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5db00247c264020fd400b139\"),\n     \"create_uid\" : ObjectId(\"5da4260ba3addc5841969a8c\"),\n     \"create_date\" : ISODate(\"2019-10-22T05:02:57.635Z\"),\n     \"write_uid\" : ObjectId(\"5d679819325ab70ab0157ce5\"),\n     \"write_date\" : ISODate(\"2019-10-22T05:02:57.635Z\"),\n     \"company_id\" : \"ROOT\",\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"category_id\" : [ \n         ObjectId(\"5d881e007306f23f8cc1e2db\")\n     ],\n     \"reaction\" : [],\n     \"url_name\" : \"mau-to-trinh-cua-so-xay-dung-gui-uy-ban-nhan-dan-cap-tinh-de-nghi-chap-thuan-chu-truong-dau-tu-du-an-xay-dung-nha-o\",\n     \"name\" : \"Mẫu tờ trình của Sở Xây Dựng gửi Uỷ Ban Nhân Dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở\",\n     \"document_url\" : \"documents/Form/Phu_luc_02_Thong_tu_19_2016_TT_BXD1571801225867.pdf\",\n     \"description\" : \"<p>Phụ lục 02 ban hành kèm theo Thông tư số19/2016/TT-BXD&nbsp;ngày 30/6/2016 của Bộ Xây dựng về mẫu tờ trình của SởXây dựng gửi&nbsp;Ủy ban nhân&nbsp;dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà&nbsp;ở.</p>\",\n     \"__v\" : 0,\n     \"search\" : \"mẫu tờ trình của sở xây dựng gửi uỷ ban nhân dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở mau to trinh cua so xay dung gui uy ban nhan dan cap tinh de nghi chap thuan chu truong dau tu du an xay dung nha o\",\n     \"type_document\" : \"pdf\",\n     \"sequence\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "get",
    "url": "/resource/count",
    "title": "Count Number Of Resource",
    "version": "0.1.0",
    "name": "CountNumberOfResource",
    "group": "Resource",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  29\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "delete",
    "url": "/resource/delete",
    "title": "Delete Resource",
    "version": "0.1.0",
    "name": "DeleteResource",
    "group": "Resource",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Resource ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5db00247c264020fd400b139\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "put",
    "url": "/resource/edit",
    "title": "Edit Resource",
    "version": "0.1.0",
    "name": "EditResource",
    "group": "Resource",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Resource ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Guide Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5db00247c264020fd400b139\",\n  \"name\": \"Mẫu tờ trình của Sở Xây Dựng\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdIsNull",
            "description": "<p>The <code>id</code> of Resource is null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"error\": \"ID is null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "get",
    "url": "/resource/list",
    "title": "Get List Resource",
    "version": "0.1.0",
    "name": "GetListResource",
    "group": "Resource",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      _id: \"5db00247c264020fd400b139\",\n      create_uid: \"5da4260ba3addc5841969a8c\",\n      create_date: \"2019-10-22T05:02:57.635Z\",\n      write_uid: \"5d679819325ab70ab0157ce5\",\n      write_date: \"2019-10-22T05:02:57.635Z\",\n      company_id: \"ROOT\",\n      status: true,\n      delete_id: null,\n      category_id: [\n         \"5d881e007306f23f8cc1e2db\"\n      ],\n      reaction: [ ],\n      url_name: \"mau-to-trinh-cua-so-xay-dung-gui-uy-ban-nhan-dan-cap-tinh-de-nghi-chap-thuan-chu-truong-dau-tu-du-an-xay-dung-nha-o\",\n      name: \"Mẫu tờ trình của Sở Xây Dựng gửi Uỷ Ban Nhân Dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở\",\n      document_url: \"documents/Form/Phu_luc_02_Thong_tu_19_2016_TT_BXD1571801225867.pdf\",\n      description: \"<p>Phụ lục 02 ban hành kèm theo Thông tư số19/2016/TT-BXD&nbsp;ngày 30/6/2016 của Bộ Xây dựng về mẫu tờ trình của SởXây dựng gửi&nbsp;Ủy ban nhân&nbsp;dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà&nbsp;ở.</p>\",\n      __v: 0,\n      search: \"mẫu tờ trình của sở xây dựng gửi uỷ ban nhân dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở mau to trinh cua so xay dung gui uy ban nhan dan cap tinh de nghi chap thuan chu truong dau tu du an xay dung nha o\",\n      type_document: \"pdf\",\n      sequence: 0,\n      category: {\n        _id: \"5d881e007306f23f8cc1e2db\",\n        create_date: \"2019-09-23T01:04:29.670Z\",\n        parent_id: null,\n        name: \"Form mẫu\",\n        status: true,\n        __v: 0\n      }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "get",
    "url": "/resource/detail",
    "title": "Get Resource Detail",
    "version": "0.1.0",
    "name": "GetResourceDetail",
    "group": "Resource",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID of resource item .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": 5d96f24a0e6a5137e42dc153\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Resource",
            "description": "<p>Detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: null,\n    create_date: \"2019-10-22T05:02:57.635Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-22T05:02:57.635Z\",\n    company_id: \"ROOT\",\n    status: true,\n    delete_id: null,\n    sequence: 0,\n    category_id: [\n        \"5d881e007306f23f8cc1e2db\"\n    ],\n    reaction: [ ],\n    _id: \"5db00247c264020fd400b139\",\n    url_name: \"mau-to-trinh-cua-so-xay-dung-gui-uy-ban-nhan-dan-cap-tinh-de-nghi-chap-thuan-chu-truong-dau-tu-du-an-xay-dung-nha-o\",\n    name: \"Mẫu tờ trình của Sở Xây Dựng gửi Uỷ Ban Nhân Dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở\",\n    document_url: \"documents/Form/Phu_luc_02_Thong_tu_19_2016_TT_BXD1571801225867.pdf\",\n    description: \"<p>Phụ lục 02 ban hành kèm theo Thông tư số19/2016/TT-BXD&nbsp;ngày 30/6/2016 của Bộ Xây dựng về mẫu tờ trình của SởXây dựng gửi&nbsp;Ủy ban nhân&nbsp;dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà&nbsp;ở.</p>\",\n    __v: 0,\n    search: \"mẫu tờ trình của sở xây dựng gửi uỷ ban nhân dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở mau to trinh cua so xay dung gui uy ban nhan dan cap tinh de nghi chap thuan chu truong dau tu du an xay dung nha o\",\n    type_document: \"pdf\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource.js",
    "groupTitle": "Resource"
  },
  {
    "type": "post",
    "url": "/resource/category/add",
    "title": "Add New Resource Category",
    "version": "0.1.0",
    "name": "AddNewResourceCategory",
    "group": "Resource_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Resource Category Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>Resource Category Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Resource Category Parent ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Resource Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"_id\" : ObjectId(\"5d881da97306f23f8cc1e2d8\"),\n    \"create_date\" : ISODate(\"2019-09-23T01:04:29.670Z\"),\n    \"parent_id\" : null,\n    \"name\" : \"Văn bản pháp luật\",\n    \"status\" : true,\n    \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./resource_category.js",
    "groupTitle": "Resource_Category"
  },
  {
    "type": "get",
    "url": "/resource/category/count",
    "title": "Count Number Of Resource Category",
    "version": "0.1.0",
    "name": "CountNumberOfResourceCategory",
    "group": "Resource_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Resource Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  6\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource_category.js",
    "groupTitle": "Resource_Category"
  },
  {
    "type": "delete",
    "url": "/resource/category/delete",
    "title": "Delete Resource Category",
    "version": "0.1.0",
    "name": "DeleteResourceCategory",
    "group": "Resource_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Resource Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d881e177306f23f8cc1e2dd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource_category.js",
    "groupTitle": "Resource_Category"
  },
  {
    "type": "get",
    "url": "/resource/category/detail",
    "title": "Resource Category Detail",
    "version": "0.1.0",
    "name": "DetailResourceCategory",
    "group": "Resource_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Resource Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d881e177306f23f8cc1e2dd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n     id: \"5d881e177306f23f8cc1e2dd\",\n     create_date: \"2019-09-23T01:04:29.670Z\",\n     parent_id: null,\n     name: \"Mẫu hợp đồng\",\n     status: true,\n     __v: 0,\n     children: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingResourceCategoryID",
            "description": "<p>The <code>id</code> of the Resource Category was missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Missing resource category ID\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource_category.js",
    "groupTitle": "Resource_Category"
  },
  {
    "type": "put",
    "url": "/resource/category/edit",
    "title": "Edit Resource Category",
    "version": "0.1.0",
    "name": "EditResourceCategory",
    "group": "Resource_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>Resource Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Resource Category Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d881e177306f23f8cc1e2dd\",\n  \"name\": \"Mẫu hợp đồng mua bán nhà đất\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdIsNull",
            "description": "<p>The <code>id</code> of the Resource Category was null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ID is null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource_category.js",
    "groupTitle": "Resource_Category"
  },
  {
    "type": "get",
    "url": "/resource/category/list",
    "title": "Get List Resource Category",
    "version": "0.1.0",
    "name": "GetListResourceCategory",
    "group": "Resource_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-09-23T01:04:29.670Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-28T04:50:32.635Z\",\n    company_id: \"ROOT\",\n    status: true,\n    delete_id: null,\n    parent_id: null,\n    _id: \"5d881da97306f23f8cc1e2d8\",\n    name: \"Văn bản pháp luật\",\n    __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./resource_category.js",
    "groupTitle": "Resource_Category"
  },
  {
    "type": "get",
    "url": "/resource/category/list_tree",
    "title": "Get List Tree Of Resource Category",
    "version": "0.1.0",
    "name": "GetListTreeOfResourceCategory",
    "group": "Resource_Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Resource Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[  \n   {\n        _id: \"5d881da97306f23f8cc1e2d8\",\n        create_date: \"2019-09-23T01:04:29.670Z\",\n        parent_id: null,\n        name: \"Văn bản pháp luật\",\n        status: true,\n        __v: 0,\n        children: [ ]\n  }\n  {...},\n  {...},\n  {...} \n]",
          "type": "json"
        }
      ]
    },
    "filename": "./resource_category.js",
    "groupTitle": "Resource_Category"
  },
  {
    "type": "post",
    "url": "/role/group_add",
    "title": "Add New User Group",
    "version": "0.1.0",
    "name": "AddNewUserGroup",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>User Group Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>User Group Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_name",
            "description": "<p>User Group Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "permission_id",
            "description": "<p>Permission User Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "module_id",
            "description": "<p>Module User Group ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9d94fe93d1b678bbe3568a\"),\n     \"create_date\" : ISODate(\"2019-10-09T08:23:21.747Z\"),\n     \"write_date\" : ISODate(\"2019-10-09T08:23:21.747Z\"),\n     \"company_id\" : null,\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"group_name\" : \"Admin\",\n     \"code\" : \"AD\",\n     \"permission_id\" : [ \n         ObjectId(\"5d9e98dda3addc584118bd81\")\n     ],\n     \"module_id\" : [ \n         ObjectId(\"5daeaf2da3a60236c43699fd\"), \n         ObjectId(\"5d9d95ada3addc5841bc357e\"), \n         ObjectId(\"5d9c0322a3addc58419d9913\"), \n         ObjectId(\"5d9c04b7a3addc58419fb82e\"), \n         ObjectId(\"5d9c054fa3addc5841a0867a\"), \n         ObjectId(\"5d9c0632a3addc5841a1b502\"), \n         ObjectId(\"5d9c0524a3addc5841a0489b\"), \n         ObjectId(\"5d9c05e6a3addc5841a153f0\"), \n         ObjectId(\"5d9c05fda3addc5841a1704e\"), \n         ObjectId(\"5d9c070fa3addc5841a2e3fd\"), \n         ObjectId(\"5d9c05a2a3addc5841a0f46d\"), \n         ObjectId(\"5d9c05b3a3addc5841a10ffb\"), \n         ObjectId(\"5d9c0754a3addc5841a33e2a\"), \n         ObjectId(\"5d9c0724a3addc5841a2ffa7\"), \n         ObjectId(\"5d9c0702a3addc5841a2cfaa\"), \n         ObjectId(\"5d9c0736a3addc5841a314c6\"), \n         ObjectId(\"5d9c45eba3addc5841f7c1b6\"), \n         ObjectId(\"5d9c45c6a3addc5841f7918b\"), \n         ObjectId(\"5d9c4315a3addc5841f3f165\"), \n         ObjectId(\"5d9c069aa3addc5841a24586\"), \n         ObjectId(\"5d9c06a9a3addc5841a25a36\"), \n         ObjectId(\"5d9c0646a3addc5841a1d094\"), \n         ObjectId(\"5d9c04f6a3addc5841a00ab5\"), \n         ObjectId(\"5db12583a3a60236c439e0cd\"), \n         ObjectId(\"5db15da7a3a60236c43aaa26\"), \n         ObjectId(\"5db2aa23a3a60236c43d36bf\"), \n         ObjectId(\"5db2aa4ea3a60236c43d3756\")\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/group_count",
    "title": "Count Number Of Group",
    "version": "0.1.0",
    "name": "CountNumberOfGroup",
    "group": "Role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  12\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "delete",
    "url": "/role/delete",
    "title": "Delete User Group",
    "version": "0.1.0",
    "name": "DeleteUserGroup",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>User Group ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5dafadc4a3a60236c437ad34\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "put",
    "url": "/role/edit",
    "title": "Edit User Group",
    "version": "0.1.0",
    "name": "EditUserGroup",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>User Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_name",
            "description": "<p>Group Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5dafadc4a3a60236c437ad34\",\n  \"group_name\": \"Asset Admin God\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IdIsNull",
            "description": "<p>The <code>id</code> of User Group is null.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"error\": \"ID is null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/list",
    "title": "Get Group List",
    "version": "0.1.0",
    "name": "GetGroupList",
    "group": "Role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>Group List.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n     {\n         create_uid: null,\n         create_date: \"2019-10-09T08:23:21.747Z\",\n         write_uid: null,\n         write_date: \"2019-10-09T08:23:21.747Z\",\n         company_id: null,\n         status: true,\n         delete_id: null,\n         permission_id: [\n             \"5d9e98dda3addc584118bd81\"\n         ],\n         module_id: [\n             \"5daeaf2da3a60236c43699fd\",\n             \"5d9d95ada3addc5841bc357e\",\n             \"5d9c0322a3addc58419d9913\",\n             \"5d9c04b7a3addc58419fb82e\",\n             \"5d9c054fa3addc5841a0867a\",\n             \"5d9c0632a3addc5841a1b502\",\n             \"5d9c0524a3addc5841a0489b\",\n             \"5d9c05e6a3addc5841a153f0\",\n             \"5d9c05fda3addc5841a1704e\",\n             \"5d9c070fa3addc5841a2e3fd\",\n             \"5d9c05a2a3addc5841a0f46d\",\n             \"5d9c05b3a3addc5841a10ffb\",\n             \"5d9c0754a3addc5841a33e2a\",\n             \"5d9c0724a3addc5841a2ffa7\",\n             \"5d9c0702a3addc5841a2cfaa\",\n             \"5d9c0736a3addc5841a314c6\",\n             \"5d9c45eba3addc5841f7c1b6\",\n             \"5d9c45c6a3addc5841f7918b\",\n             \"5d9c4315a3addc5841f3f165\",\n             \"5d9c069aa3addc5841a24586\",\n             \"5d9c06a9a3addc5841a25a36\",\n             \"5d9c0646a3addc5841a1d094\",\n             \"5d9c04f6a3addc5841a00ab5\",\n             \"5db12583a3a60236c439e0cd\",\n             \"5db15da7a3a60236c43aaa26\",\n             \"5db2aa23a3a60236c43d36bf\",\n             \"5db2aa4ea3a60236c43d3756\"\n         ],\n         _id: \"5d9d94fe93d1b678bbe3568a\",\n         group_name: \"Admin\",\n         code: \"AD\",\n         permission: [ ],\n         module: [\n             {\n                 create_uid: null,\n                 create_date: \"2019-10-06T07:35:36.812Z\",\n                 write_uid: null,\n                 write_date: null,\n                 company_id: \"ROOT\",\n                 status: true,\n                 delete_id: null,\n                 _id: \"5daeaf2da3a60236c43699fd\",\n                 description: \"\",\n                 keyword: \"\",\n                 url: \"/role\",\n                 name: \"Phân quyên\",\n                 code: \"ROLE\",\n                 sequence: 0,\n                 icon: \"\",\n                 category_id: \"5daeaefca3a60236c436996e\",\n                 parent_id: null,\n                 __v: 0,\n                 type: \"MENU\",\n                 id: \"5daeaf2da3a60236c43699fd\"\n             },\n             {...},\n             {...},\n             {...}\n         ],\n         id: \"5d9d94fe93d1b678bbe3568a\"\n     },\n     {...},\n     {...},\n     {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/list_module",
    "title": "Get List Module",
    "version": "0.1.0",
    "name": "GetListModule",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "category_id",
            "description": "<p>Module Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"category_id\": \"5d9c0322a3addc58419d9913\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Module.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n     {\n         create_uid: null,\n         create_date: \"2019-10-06T07:35:36.812Z\",\n         write_uid: null,\n         write_date: null,\n         company_id: \"ROOT\",\n         status: true,\n         delete_id: null,\n         _id: \"5d9c0322a3addc58419d9913\",\n         description: \"\",\n         keyword: \"\",\n         url: \"/project/category\",\n         name: \"Danh mục Dự án\",\n         code: \"PROJECT_CATEGORY\",\n         sequence: 0,\n         icon: \"\",\n         category_id: \"5d9c0322a3addc58419d9913\",\n         parent_id: null,\n         __v: 0,\n         type: \"MENU\",\n         category: {\n             create_uid: null,\n             create_date: \"2019-10-06T07:35:36.812Z\",\n             write_uid: null,\n             write_date: null,\n             company_id: \"ROOT\",\n             status: true,\n             delete_id: null,\n             description: \"\",\n             sequence: 0,\n             keyword: \"\",\n             _id: \"5d9c0322a3addc58419d9913\",\n             name: \"Dự án\",\n             code: \"PROJECT\",\n             icon: \"snippets\",\n             parent_id: null,\n             __v: 0\n         },\n         id: \"5d9c0322a3addc58419d9913\"\n     }\n     {...},\n     {...},\n     {...}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryIdIsNotValid",
            "description": "<p>The <code>id</code> of Module Category is not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\",\n  \"message\": \"category_id is not valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/list_module_category",
    "title": "Get List Module Category",
    "version": "0.1.0",
    "name": "GetListModuleCategory",
    "group": "Role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Role.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        create_uid: null,\n        create_date: \"2019-10-06T07:35:36.812Z\",\n        write_uid: null,\n        write_date: null,\n        company_id: \"ROOT\",\n        status: true,\n        delete_id: null,\n        description: \"\",\n        sequence: 0,\n        keyword: \"\",\n        _id: \"5d9c0264a3addc58419c9409\",\n        name: \"Quy hoạch\",\n        code: \"PLANNING\",\n        icon: \"radius-upright\",\n        parent_id: null,\n        __v: 0\n    }\n    {...},\n    {...},\n    {...}\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "get",
    "url": "/role/group_detail",
    "title": "Get User Group Detail",
    "version": "0.1.0",
    "name": "GetUserGroupDetail",
    "group": "Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user group item .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": \"5dafadc4a3a60236c437ad34\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Resource",
            "description": "<p>Detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: null,\n    create_date: \"2019-10-09T08:23:21.747Z\",\n    write_uid: null,\n    write_date: \"2019-10-09T08:23:21.747Z\",\n    company_id: null,\n    status: true,\n    delete_id: null,\n    permission_id: [\n        \"5d9e98dda3addc584118bd81\"\n    ],\n    module_id: [\n        \"5db15da7a3a60236c43aaa26\",\n        \"5db12583a3a60236c439e0cd\",\n        \"5daeaf2da3a60236c43699fd\",\n        \"5db2aa23a3a60236c43d36bf\"\n    ],\n    _id: \"5dafadc4a3a60236c437ad34\",\n    group_name: \"Cộng tác viên\",\n    code: \"CTV\",\n    permission: [ ],\n    module: [\n        {\n            create_uid: null,\n            create_date: \"2019-10-06T07:35:36.812Z\",\n            write_uid: null,\n            write_date: null,\n            company_id: \"ROOT\",\n            status: true,\n            delete_id: null,\n            _id: \"5db15da7a3a60236c43aaa26\",\n            description: \"\",\n            keyword: \"\",\n            url: \"/user_company\",\n            name: \"Người dùng công ty\",\n            code: \"USER_COMPANY\",\n            sequence: 0,\n            icon: \"\",\n            category_id: \"5daeaefca3a60236c436996e\",\n            parent_id: null,\n            __v: 0,\n            type: \"MENU\",\n            id: \"5db15da7a3a60236c43aaa26\"\n        },\n    {...},\n    {...},\n    {...}\n    ],\n    id: \"5dafadc4a3a60236c437ad34\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role.js",
    "groupTitle": "Role"
  },
  {
    "type": "post",
    "url": "/role/user_company/add",
    "title": "Add New User Company",
    "version": "0.1.0",
    "name": "AddNewUserCompany",
    "group": "Role_User_Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>User Company Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>User Company Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>User Company Position.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "company_id",
            "description": "<p>User Company ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "group_id",
            "description": "<p>User Company Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "user_id",
            "description": "<p>Company User ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"_id\" : ObjectId(\"5d9d991050d9ad34b4db2e8d\"),\n     \"create_date\" : ISODate(\"2019-10-09T08:23:21.747Z\"),\n     \"write_date\" : ISODate(\"2019-10-09T08:23:21.747Z\"),\n     \"company_id\" : ObjectId(\"5d9ae33a6c872036a4b2d47f\"),\n     \"status\" : true,\n     \"delete_id\" : null,\n     \"group_id\" : [ \n         ObjectId(\"5d9d94fe93d1b678bbe3568a\"), \n         ObjectId(\"5db12ac3a3a60236c439f618\")\n     ],\n     \"user_id\" : ObjectId(\"5d9c3342cc1f7b3f4c8e79dd\"),\n     \"lang_id\" : null,\n     \"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role_user_company.js",
    "groupTitle": "Role_User_Company"
  },
  {
    "type": "get",
    "url": "role/user_company/count",
    "title": "Count Number Of User Company",
    "version": "0.1.0",
    "name": "CountNumberOfUserCompany",
    "group": "Role_User_Company",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of Resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  9\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./role_user_company.js",
    "groupTitle": "Role_User_Company"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "Add New User",
    "version": "0.1.0",
    "name": "AddNewUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>User Status.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "delete_id",
            "description": "<p>User Delete ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>User Partner ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang_id",
            "description": "<p>User Language ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gmt_offset",
            "description": "<p>User GMT Offset.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date_format",
            "description": "<p>User Date Format.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thousands_sep",
            "description": "<p>User Thousands Separators.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     create_uid: \"5d679819325ab70ab0157ce5\",\n     create_date: \"2019-10-08T06:57:06.450Z\",\n     write_uid: \"5d679819325ab70ab0157ce5\",\n     write_date: \"2019-10-08T06:57:06.450Z\",\n     company_id: \"\",\n     status: true,\n     delete_uid: null,\n     email: \"\",\n     partner_id: \"\",\n     lang_id: \"\",\n     gmt_offset: \"0.0\",\n     date_format: \"\",\n     time_format: \"\",\n     thousands_sep: \"\",\n     decimal_point: \"\",\n     avatar: \"\",\n     type: \"\",\n     inactive: false,\n     renew_password_id: \"\",\n     online: 0,\n     user_referral_code: \"ATC045\",\n     save_product: [\n         \"710801-P10.17\"\n     ],\n     save_project: [ ],\n     referral_code: \"AAA012\",\n     fb_id: null,\n     google_id: null,\n     list_referral_user: [\n         \"5da4260ba3addc5841969a8c\"\n     ],\n     _id: \"5d9c3342cc1f7b3f4c8e79dd\",\n     delete_id: \"\",\n     first_name: \"Duong Cong \",\n     last_name: \"Vu\",\n     phone: \"0123123123\",\n     password: \"$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi\",\n     __v: 9,\n     country_code: 84,\n     working_area: \"Quận 11, Tp HCM\",\n     address: \"1011 3 tháng 2, Quận 11, Tp HCM\",\n     followers: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User Avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>User Type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "inactive",
            "description": "<p>User Inactive Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "decimal_point",
            "description": "<p>User Point.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "renew_password_id",
            "description": "<p>User Renew Password ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "online",
            "description": "<p>User Online.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_referral_code",
            "description": "<p>User Referral Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "save_product",
            "description": "<p>User Save Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "save_project",
            "description": "<p>User Save Project.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "referral_code",
            "description": "<p>Referral Code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User Phone Number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fb_id",
            "description": "<p>User Facebook ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "google_id",
            "description": "<p>User Google ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list_referral_user",
            "description": "<p>List Referral User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/count",
    "title": "Count Number Of User",
    "version": "0.1.0",
    "name": "CountNumberOfUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": false,
            "field": "number",
            "description": "<p>Number of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "{\n  17\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/delete",
    "title": "Delete User",
    "version": "0.1.0",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9c3342cc1f7b3f4c8e79dd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/edit",
    "title": "Edit User",
    "version": "0.1.0",
    "name": "EditUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Recruit Name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": \"5d9c3342cc1f7b3f4c8e79dd\",\n  \"first_name\": \"Hứa Văn \"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Data:",
          "content": "[\n   HTTP/1.1 200 OK\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/list",
    "title": "Get List User",
    "version": "0.1.0",
    "name": "GetListUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "Int32"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-08T06:57:06.450Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-08T06:57:06.450Z\",\n    company_id: \"\",\n    status: true,\n    delete_uid: null,\n    email: \"\",\n    partner_id: \"\",\n    lang_id: \"\",\n    gmt_offset: \"0.0\",\n    date_format: \"\",\n    time_format: \"\",\n    thousands_sep: \"\",\n    decimal_point: \"\",\n    avatar: \"\",\n    type: \"\",\n    inactive: false,\n    renew_password_id: \"\",\n    online: 0,\n    user_referral_code: \"ATC045\",\n    save_product: [\n        \"710801-P10.17\"\n    ],\n    save_project: [ ],\n    referral_code: \"AAA012\",\n    fb_id: null,\n    google_id: null,\n    list_referral_user: [\n        \"5da4260ba3addc5841969a8c\"\n    ],\n    _id: \"5d9c3342cc1f7b3f4c8e79dd\",\n    delete_id: \"\",\n    first_name: \"Duong Cong \",\n    last_name: \"Vu\",\n    phone: \"0123123123\",\n    password: \"$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi\",\n    __v: 9,\n    country_code: 84,\n    working_area: \"Quận 11, Tp HCM\",\n    address: \"1011 3 tháng 2, Quận 11, Tp HCM\",\n    followers: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/detail",
    "title": "Get User Detail",
    "version": "0.1.0",
    "name": "GetUserDetail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"id\": \"5d9c3342cc1f7b3f4c8e79dd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of Recruit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    create_uid: \"5d679819325ab70ab0157ce5\",\n    create_date: \"2019-10-08T06:57:06.450Z\",\n    write_uid: \"5d679819325ab70ab0157ce5\",\n    write_date: \"2019-10-08T06:57:06.450Z\",\n    company_id: \"\",\n    status: true,\n    delete_uid: null,\n    email: \"\",\n    partner_id: \"\",\n    lang_id: \"\",\n    gmt_offset: \"0.0\",\n    date_format: \"\",\n    time_format: \"\",\n    thousands_sep: \"\",\n    decimal_point: \"\",\n    avatar: \"\",\n    type: \"\",\n    inactive: false,\n    renew_password_id: \"\",\n    online: 0,\n    user_referral_code: \"ATC045\",\n    save_product: [\n    \"710801-P10.17\",\n    \"710801-P10.121\",\n    \"710801-P10.164\"\n    ],\n    save_project: [ ],\n    referral_code: \"AAA012\",\n    fb_id: null,\n    google_id: null,\n    list_referral_user: [\n    \"5da4260ba3addc5841969a8c\"\n    ],\n    _id: \"5d9c3342cc1f7b3f4c8e79dd\",\n    delete_id: \"\",\n    first_name: \"Duong Cong \",\n    last_name: \"Vu\",\n    phone: \"0123123123\",\n    password: \"$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi\",\n    __v: 27,\n    country_code: 84,\n    working_area: \"Quận 11, Tp HCM\",\n    address: \"1011 3 tháng 2, Quận 11, Tp HCM\",\n    followers: [ ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "role/user_company/list",
    "title": "Get List User Company",
    "version": "0.1.0",
    "name": "GetListUserCompany",
    "group": "User_Company_Role",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "page",
            "description": "<p>Number of page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of items in one page .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n  \"page\": 1,\n  \"limit\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>List of User Company.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " [\n     {\n         _id: \"5d9d991050d9ad34b4db2e8d\",\n         company: {\n             _id: \"5d9ae33a6c872036a4b2d47f\",\n             name: \"Asset 1\"\n         },\n         group: [\n             {\n                 _id: \"5d9d94fe93d1b678bbe3568a\",\n                 create_date: \"2019-10-09T08:23:21.747Z\",\n                 write_date: \"2019-10-09T08:23:21.747Z\",\n                 company_id: null,\n                 status: true,\n                 delete_id: null,\n                 group_name: \"Admin\",\n                 code: \"AD\",\n                 permission_id: [\n                     \"5d9e98dda3addc584118bd81\"\n                 ],\n                 module_id: [\n                     \"5daeaf2da3a60236c43699fd\",\n                     \"5d9d95ada3addc5841bc357e\",\n                     \"5d9c0322a3addc58419d9913\",\n                     \"5d9c04b7a3addc58419fb82e\",\n                     \"5d9c054fa3addc5841a0867a\",\n                     \"5d9c0632a3addc5841a1b502\",\n                     \"5d9c0524a3addc5841a0489b\",\n                     \"5d9c05e6a3addc5841a153f0\",\n                     \"5d9c05fda3addc5841a1704e\",\n                     \"5d9c070fa3addc5841a2e3fd\",\n                     \"5d9c05a2a3addc5841a0f46d\",\n                     \"5d9c05b3a3addc5841a10ffb\",\n                     \"5d9c0754a3addc5841a33e2a\",\n                     \"5d9c0724a3addc5841a2ffa7\",\n                     \"5d9c0702a3addc5841a2cfaa\",\n                     \"5d9c0736a3addc5841a314c6\",\n                     \"5d9c45eba3addc5841f7c1b6\",\n                     \"5d9c45c6a3addc5841f7918b\",\n                     \"5d9c4315a3addc5841f3f165\",\n                     \"5d9c069aa3addc5841a24586\",\n                     \"5d9c06a9a3addc5841a25a36\",\n                     \"5d9c0646a3addc5841a1d094\",\n                     \"5d9c04f6a3addc5841a00ab5\",\n                     \"5db12583a3a60236c439e0cd\",\n                     \"5db15da7a3a60236c43aaa26\",\n                     \"5db2aa23a3a60236c43d36bf\",\n                     \"5db2aa4ea3a60236c43d3756\"\n                 ]\n             },\n             {\n                 _id: \"5db12ac3a3a60236c439f618\",\n                 create_date: \"2019-10-09T08:23:21.747Z\",\n                 write_date: \"2019-10-09T08:23:21.747Z\",\n                 company_id: null,\n                 status: true,\n                 delete_id: null,\n                 group_name: \"Asset data\",\n                 code: \"DAT\",\n                 permission_id: [ ],\n                 module_id: [\n                     \"5d9c05e6a3addc5841a153f0\",\n                     \"5d9c05fda3addc5841a1704e\",\n                     \"5d9c0632a3addc5841a1b502\",\n                     \"5d9c0646a3addc5841a1d094\"\n                 ]\n             }\n         ],\n         user: {\n             _id: \"5d9c3342cc1f7b3f4c8e79dd\",\n             create_uid: \"\",\n             write_uid: \"\",\n             company_id: \"\",\n             status: true,\n             delete_id: \"\",\n             email: \"\",\n             partner_id: \"\",\n             lang_id: \"\",\n             gmt_offset: \"0.0\",\n             date_format: \"\",\n             time_format: \"\",\n             thousands_sep: \"\",\n             decimal_point: \"\",\n             avatar: \"\",\n             type: \"\",\n             inactive: false,\n             renew_password_id: \"\",\n             online: 0,\n             user_referral_code: \"ATC045\",\n             save_product: [ ],\n             save_project: [ ],\n             referral_code: \"ATC046\",\n             fb_id: null,\n             google_id: null,\n             list_referral_user: [\n                 \"5da3eb917a808c2cb00b67f6\"\n             ],\n             first_name: \"Duong Cong \",\n             last_name: \"Vu\",\n             phone: \"0123123123\",\n             password: \"$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi\",\n             create_date: \"2019-10-08T06:57:06.450Z\",\n             write_date: \"2019-10-08T06:57:06.450Z\",\n             __v: 0,\n             country_code: 84\n         }\n     }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./role_user_company.js",
    "groupTitle": "User_Company_Role"
  }
] });
