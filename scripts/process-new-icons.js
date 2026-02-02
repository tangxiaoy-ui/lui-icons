
import fs from 'fs';
import path from 'path';

const iconsDir = path.join(process.cwd(), 'icons');
const files = fs.readdirSync(iconsDir);

// Helper to convert camelCase to kebab-case
const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

// Common translations for tags
const tagTranslations = {
  '指示类': 'indicator',
  '通用类': null, // Remove
  '井号': 'pound', '话题': 'hashtag', '整数': 'integer', '标签': 'tag',
  '信息': 'info', 'information': 'information',
  '加载': 'loading', 'spinner': 'spinner',
  '叹号': 'exclamation', '警告': 'warning', '提示': 'alert', '风险管理': 'risk',
  '失败': 'fail', '关闭': 'close', '错误': 'error',
  '成功': 'success', '勾选': 'check', '完成': 'complete',
  '批注': 'annotate', '抄送': 'cc', '签字': 'sign',
  '方向': 'direction', '右上': 'top-right', '跳转': 'jump',
  '向上': 'up', '向下': 'down', '向右': 'right', '向左': 'left',
  '无': 'none', '空': 'empty', '禁用': 'disabled', '取消': 'cancel',
  '未勾选': 'unchecked',
  '箭头上': 'arrow-up', '箭头下': 'arrow-down', '箭头右': 'arrow-right', '双箭头': 'double-arrow',
  '问号': 'question', '问题': 'help',
  
  // Extended translations
  '日历': 'calendar',
  '日程': 'schedule',
  '值班': 'duty',
  '数据': 'data',
  '文件': 'file',
  '文件夹': 'folder',
  '图片': 'image',
  '照片': 'photo',
  '用户': 'user',
  '人员': 'person',
  '设置': 'settings',
  '搜索': 'search',
  '添加': 'add',
  '删除': 'delete',
  '修改': 'edit',
  '保存': 'save',
  '上传': 'upload',
  '下载': 'download',
  '导入': 'import',
  '导出': 'export',
  '时间': 'time',
  '记录': 'record',
  '历史': 'history',
  '设备': 'device',
  '电脑': 'computer',
  '显示': 'display',
  '浏览': 'browse',
  '眼睛': 'eye',
  '闭眼': 'eye-off',
  '隐藏密码': 'hide-password',
  '隐藏': 'hide',
  '消息': 'message',
  '对话': 'chat',
  '评论': 'comment',
  '收藏': 'favorite',
  '点赞': 'like',
  '星星': 'star',
  '心': 'heart',
  '云': 'cloud',
  '天气': 'weather',
  '锁': 'lock',
  '解锁': 'unlock',
  '权限': 'permission',
  '锁定': 'locked',
  '画板': 'palette',
  '灯泡': 'lightbulb',
  '创意': 'idea',
  '想法': 'thought',
  '火热': 'hot',
  '推荐': 'recommend',
  '标志': 'logo',
  '缺陷': 'defect',
  '网页': 'webpage',
  '页面': 'page',
  '代码面板': 'code-panel',
  '表情': 'emoticon',
  '微笑': 'smile',
  '失望': 'disappointed',
  '灰心': 'discouraged',
  '追评': 'append-comment',
  '追加': 'append',
  '钻石': 'diamond',
  '精华': 'essence',
  '长整行': 'long-integer',
  '短整行': 'short-integer',
  '双精度浮点': 'double',
  '斑点': 'blob',
  '实验': 'experiment',
  '研发': 'research',
  '书签': 'bookmark',
  '标记': 'mark',
  '数据导出': 'data-export',
  '数据导入': 'data-import',
  '数据切换': 'data-switch',
  '数据权限': 'data-permission',
  '委托': 'entrust',
  '借用': 'borrow',
  '全部借用': 'borrow-all',
  '文档': 'document',
  '待处理文档': 'file-pending',
  '已处理文档': 'file-processed',
  '新建文档': 'file-add',
  '打开': 'open',
  '文件条目': 'file-item',
  '登记': 'register',
  '签到': 'check-in',
  '盖章': 'stamp',
  '公章': 'official-seal',
  '审核': 'audit',
  '审批': 'approve',
  '轨迹': 'trajectory',
  '路径': 'path',
  '执行人': 'executor',
  '群组': 'group',
  '成员': 'member',
  '确认': 'confirm',
  '地球': 'earth',
  '语言': 'language',
  '国际化': 'i18n',
  '翻译': 'translation',
  '成功': 'success',
  '定位': 'location',
  '位置': 'position',
  '固定': 'fixed',
  '首页': 'home',
  '主页': 'main-page',
  '房子': 'house',
  '层级': 'level',
  '同级': 'same-level',
  '父级': 'parent-level',
  '子级': 'child-level',
  '工具': 'tool',
  '维护': 'maintenance',
  '配置': 'config',
  '流程': 'process',
  '节点': 'node',
  '恢复默认': 'restore-default',
  '重置': 'reset',
  '尺子': 'ruler',
  '规格': 'spec',
  '尺寸': 'size',
  '图表': 'chart',
  '柱状图': 'bar-chart',
  '统计': 'statistics',
  '定时': 'timing',
  '计时': 'timer',
  '时钟': 'clock',
  '会议室': 'meeting-room',
  '商谈': 'negotiation',
};

// Category mapping based on keywords
const getCategories = (tags, name) => {
  const cats = new Set();
  
  if (tags.includes('arrow') || name.includes('arrow') || tags.includes('direction')) {
    cats.add('arrows');
  }
  
  if (tags.includes('warning') || tags.includes('error') || tags.includes('success') || tags.includes('info') || tags.includes('help')) {
    cats.add('ui');
    cats.add('security'); // often used for alerts
  }
  
  if (tags.includes('loading') || tags.includes('spinner')) {
    cats.add('ui');
    cats.add('actions'); // loading is an action state
  }
  
  if (tags.includes('check') || tags.includes('close') || tags.includes('add')) {
    cats.add('ui');
    cats.add('actions');
  }

  if (cats.size === 0) cats.add('ui'); // default
  
  // Clean up
  if (cats.has('arrows') && cats.has('ui')) {
     // keep both? yes.
  }

  return Array.from(cats);
};

files.forEach(file => {
  // Pattern: [Category-Tags]iconCommon_line_12_Name.svg
  // Example: [指示类-井号&话题&整数]iconCommon_line_12_pound.svg
  const match = file.match(/^\[(.*?)\]iconCommon_line_12_(.*)\.svg$/);
  
  if (match) {
    const rawMeta = match[1]; // "指示类-井号&话题&整数"
    const rawName = match[2]; // "pound"
    
    // 1. Rename SVG
    const newName = toKebabCase(rawName);
    const newFileName = `${newName}.svg`;
    
    // Check if target file exists to avoid overwrite (or maybe we want to overwrite?)
    // For now, let's assume we overwrite or it's a new file.
    fs.renameSync(path.join(iconsDir, file), path.join(iconsDir, newFileName));
    console.log(`Renamed: ${file} -> ${newFileName}`);
    
    // 2. Generate JSON
    // Parse Chinese tags
    // "指示类-井号&话题&整数" -> split by '-' then '&'
    const parts = rawMeta.split(/[-&]/);
    const translatedTags = parts.map(p => {
        if (tagTranslations[p] === null) return null;
        return tagTranslations[p] || p;
    }).filter(p => p !== null && !['指示类', 'indicator'].includes(p)); // filter out category name from tags if generic
    
    // Add name parts to tags
    const nameTags = newName.split('-');
    
    // Merge tags
    const allTags = new Set([...nameTags, ...translatedTags]);
    // Remove empty or undefined
    allTags.delete(undefined);
    allTags.delete('');
    
    const finalTags = Array.from(allTags);
    const finalCategories = getCategories(finalTags, newName);
    
    const jsonContent = {
      "$schema": "../icon.schema.json",
      "contributors": [
        "Tubiao Bot"
      ],
      "tags": finalTags,
      "categories": finalCategories
    };
    
    const jsonFileName = `${newName}.json`;
    fs.writeFileSync(path.join(iconsDir, jsonFileName), JSON.stringify(jsonContent, null, 2));
    console.log(`Created JSON: ${jsonFileName}`);
  }
});
