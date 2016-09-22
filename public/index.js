/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _TodoList = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Main);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      activeTags: [],
	      todos: [{ title: 'Download react-starter-es6', completed: true, tags: ['github'] }, { title: 'Read the docs', completed: true, tags: ['docs', 'github'] }, { title: 'Make a component', completed: false, tags: ['react', 'jsx'] }, { title: 'Combine components to make an app', completed: false, tags: ['react', 'javascript', 'jsx'] }, { title: 'Build a social network empire', completed: false, tags: ['facebook'] }]
	    }, _this.handleToggleCompleted = function (idx) {
	      var updatedTodos = [].concat(_toConsumableArray(_this.state.todos));
	      updatedTodos.splice(idx, 1, _extends({}, _this.state.todos[idx], { completed: !_this.state.todos[idx].completed }));

	      _this.setState({ todos: updatedTodos });
	    }, _this.handleAddItem = function (titleField, tagField) {
	      var title = document.getElementById(titleField);
	      var newTags = document.getElementById(tagField);

	      if (!title.value) {
	        return alert('Title cannot be blank');
	      }

	      var removeDuplicateTags = new Set();
	      newTags.value.split(', ').map(function (tag) {
	        return removeDuplicateTags.add(tag);
	      });
	      var noDuplicateTags = [].concat(_toConsumableArray(removeDuplicateTags));

	      var newTodoItem = { title: title.value, completed: false, tags: noDuplicateTags };
	      var updatedTodos = [].concat(_toConsumableArray(_this.state.todos), [newTodoItem]);

	      title.value = '';
	      newTags.value = '';

	      _this.setState({ todos: updatedTodos });
	    }, _this.handleDeleteItem = function (idx) {
	      var updatedTodos = [].concat(_toConsumableArray(_this.state.todos));
	      updatedTodos.splice(idx, 1);

	      _this.setState({ todos: updatedTodos });
	    }, _this.handleTagFilter = function (tag) {
	      var select = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var updatedTags = [].concat(_toConsumableArray(_this.state.activeTags));
	      var activeSet = new Set();

	      _this.state.activeTags.map(function (tag) {
	        return activeSet.add(tag);
	      });

	      if (select) {
	        if (activeSet.has(tag)) {
	          var index = updatedTags.indexOf(tag);
	          updatedTags.splice(index, 1);
	        } else {
	          updatedTags.push(tag);
	        }
	      } else {
	        var _index = updatedTags.indexOf(tag);
	        updatedTags.splice(_index, 1);
	      }

	      _this.setState({ activeTags: updatedTags });
	    }, _this.handleClearTagFilter = function () {
	      _this.setState({ activeTags: [] });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-12' },
	            _react2.default.createElement(_TodoList.TodoList, {
	              todos: this.state.todos,
	              activeTags: this.state.activeTags,
	              tagFilter: this.handleTagFilter,
	              clearTagFilter: this.handleClearTagFilter,
	              toggleCompleted: this.handleToggleCompleted,
	              addItem: this.handleAddItem,
	              deleteItem: this.handleDeleteItem
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TodoList = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AddItemPanel = __webpack_require__(4);

	var _TagPanel = __webpack_require__(5);

	var _TodoItem = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoList = exports.TodoList = function TodoList(_ref) {
	  var todos = _ref.todos;
	  var activeTags = _ref.activeTags;
	  var tagFilter = _ref.tagFilter;
	  var clearTagFilter = _ref.clearTagFilter;
	  var toggleCompleted = _ref.toggleCompleted;
	  var addItem = _ref.addItem;
	  var deleteItem = _ref.deleteItem;

	  var todoItemsToRender = [];
	  var todoItemProps = {
	    toggleCompleted: toggleCompleted,
	    deleteItem: deleteItem
	  };

	  if (!activeTags.length) {
	    todos.map(function (todo, i) {
	      todoItemsToRender.push(_react2.default.createElement(_TodoItem.TodoItem, _extends({
	        key: i,
	        todo: todo,
	        idx: i
	      }, todoItemProps)));
	    });
	  } else {
	    todos.map(function (todo, i) {
	      todo.tags.map(function (tag) {
	        if (activeTags.indexOf(tag) !== -1) {
	          todoItemsToRender.push(_react2.default.createElement(_TodoItem.TodoItem, _extends({
	            key: i,
	            todo: todo,
	            idx: i,
	            activeTags: activeTags
	          }, todoItemProps)));
	        }
	      });
	    });
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: 'panel panel-default' },
	    _react2.default.createElement(
	      'div',
	      { className: 'panel-heading' },
	      _react2.default.createElement(
	        'h3',
	        { className: 'panel-title' },
	        'TodoList'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'panel-body' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel panel-default' },
	        _react2.default.createElement(_AddItemPanel.AddItemPanel, { addItem: addItem })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'list-group' },
	        _react2.default.createElement(_TagPanel.TagPanel, { todos: todos, activeTags: activeTags, tagFilter: tagFilter, clearTagFilter: clearTagFilter }),
	        todoItemsToRender
	      )
	    )
	  );
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AddItemPanel = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AddItemPanel = exports.AddItemPanel = function AddItemPanel(_ref) {
	  var addItem = _ref.addItem;

	  return _react2.default.createElement(
	    "div",
	    { className: "panel-body" },
	    _react2.default.createElement(
	      "form",
	      { className: "form-horizontal" },
	      _react2.default.createElement(
	        "div",
	        { className: "form-group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "addItemField", className: "col-xs-2" },
	          "Title"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "col-xs-10" },
	          _react2.default.createElement("input", { id: "addItemField", type: "text", className: "form-control" })
	        )
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "form-group" },
	        _react2.default.createElement(
	          "label",
	          { htmlFor: "addTagsField", className: "col-xs-2" },
	          "Tags"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "col-xs-10" },
	          _react2.default.createElement("input", { id: "addTagsField", type: "text", className: "form-control" }),
	          _react2.default.createElement(
	            "p",
	            { className: "help-block small" },
	            "Tags should be separated with a comma and a space"
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "submit",
	        { type: "button", className: "btn btn-success pull-right", onClick: function onClick() {
	            return addItem('addItemField', 'addTagsField');
	          } },
	        "Add Item"
	      )
	    )
	  );
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TagPanel = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTag = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var TagPanel = exports.TagPanel = function TagPanel(_ref) {
	  var todos = _ref.todos;
	  var activeTags = _ref.activeTags;
	  var tagFilter = _ref.tagFilter;

	  var allTags = new Set();

	  todos.map(function (todo) {
	    return todo.tags.map(function (tag) {
	      return allTags.add(tag);
	    });
	  });

	  var availableTags = [].concat(_toConsumableArray(allTags));
	  var tagsToRender = [];

	  availableTags.map(function (tag, i) {
	    var active = false;
	    activeTags.indexOf(tag) > -1 && (active = true);
	    tagsToRender.push(_react2.default.createElement(_TodoTag.TodoTag, { key: i, tag: tag, active: active, tagFilter: tagFilter }));
	  });

	  var panelTitle = 'Tags to filter';
	  if (activeTags.length) {
	    panelTitle = _react2.default.createElement(
	      'div',
	      null,
	      'Filtering by tag',
	      activeTags.length > 1 && 's',
	      ': ',
	      activeTags.join(', '),
	      _react2.default.createElement(
	        'button',
	        { className: 'btn btn-xs btn-primary pull-right', style: { marginTop: '-2px' }, onClick: function onClick() {
	            return clearTagFilter();
	          } },
	        'Clear Filter'
	      )
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: 'panel panel-default' },
	    _react2.default.createElement(
	      'div',
	      { className: 'panel-heading' },
	      _react2.default.createElement(
	        'h3',
	        { className: 'panel-title' },
	        panelTitle
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'panel-body' },
	      tagsToRender
	    )
	  );
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TodoTag = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoTag = exports.TodoTag = function TodoTag(_ref) {
	  var tag = _ref.tag;
	  var active = _ref.active;
	  var tagFilter = _ref.tagFilter;

	  var extraProps = { style: { display: 'inline-block', marginRight: '5px' } };
	  if (tagFilter) {
	    extraProps.onClick = function () {
	      return tagFilter(tag);
	    };
	    extraProps.style.cursor = 'pointer';
	  }

	  return _react2.default.createElement(
	    'div',
	    _extends({ className: 'label ' + (active ? 'label-primary' : 'label-default') }, extraProps),
	    tag
	  );
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TodoItem = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTag = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoItem = exports.TodoItem = function TodoItem(_ref) {
	  var todo = _ref.todo;
	  var idx = _ref.idx;
	  var activeTags = _ref.activeTags;
	  var toggleCompleted = _ref.toggleCompleted;
	  var deleteItem = _ref.deleteItem;

	  var todoTitle = todo.completed ? _react2.default.createElement(
	    'del',
	    null,
	    todo.title
	  ) : todo.title;
	  var todoTags = [];
	  var todoTagProps = {};

	  if (activeTags) {
	    todo.tags.map(function (tag, i) {
	      var todoTagProps = {
	        key: i,
	        tag: tag
	      };

	      activeTags.indexOf(tag) > -1 && (todoTagProps.active = true);

	      todoTags.push(_react2.default.createElement(_TodoTag.TodoTag, todoTagProps));
	    });
	  } else {
	    todo.tags.map(function (tag, i) {
	      todoTags.push(_react2.default.createElement(_TodoTag.TodoTag, { key: i, tag: tag }));
	    });
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: 'list-group-item ' + (todo.completed ? 'list-group-item-warning' : '') },
	    _react2.default.createElement(
	      'span',
	      { className: 'label label-danger pull-right', role: 'button', onClick: function onClick() {
	          return deleteItem(idx);
	        } },
	      'Delete'
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'checkbox', style: { marginLeft: '8px' } },
	      _react2.default.createElement(
	        'label',
	        { style: { cursor: 'pointer' } },
	        _react2.default.createElement('input', { type: 'checkbox', checked: todo.completed, onChange: function onChange() {
	            return toggleCompleted(idx);
	          }, style: { marginRight: '10px' } }),
	        todoTitle
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      todoTags
	    )
	  );
	};

/***/ }
/******/ ]);