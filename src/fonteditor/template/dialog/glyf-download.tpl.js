define(function () {return '<div class="glyf-download-dialog">\n    <div class="form-inline">\n        <span class="form-title">图标名称: <em id="glyf-download-name"></em></span>\n        <div class="form-group field-margin">\n            <div class="input-group input-group-sm">\n                <span class="input-group-addon">颜色</span>\n                <input id="glyf-download-color" type="text" value="#666" class="form-control">\n            </div>\n        </div>\n\n        <div class="form-group field-margin">\n            <div class="input-group input-group-sm">\n                <span class="input-group-addon">大小</span>\n                <input id="glyf-download-size" type="number" value="128" min="10" max="10000" step="1" class="form-control"><span class="input-group-addon">px</span>\n            </div>\n        </div>\n    </div>\n    <div id="glyf-download-preview" class="preview-panel">\n\n    </div>\n    <div class="form-inline glyf-download-btn">\n        <div class="input-group input-group-sm">\n            <a id="glyf-download-svg" class="btn btn-flat btn-new">下载SVG</a>\n            <a id="glyf-download-png" class="btn btn-flat field-margin">下载PNG</a>\n        </div>\n    </div>\n</div>\n';});