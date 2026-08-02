const defaultTasks = [
  { id: 1, title: "确认七夕活动最终投放方案", priority: "P0", due: "今天 16:00", reminder: "提前 30 分钟", done: false },
  { id: 2, title: "审核本周朋友圈内容排期", priority: "P1", due: "今天 18:00", reminder: "提前 1 小时", done: false },
  { id: 3, title: "整理达人合作数据复盘", priority: "P1", due: "明天 10:00", reminder: "明早提醒", done: false },
  { id: 4, title: "更新品牌素材共享目录", priority: "P2", due: "8月2日", reminder: "当天提醒", done: false },
  { id: 5, title: "完成团队晨会纪要", priority: "P1", due: "今天 11:30", reminder: "已提醒", done: true },
];

const defaultTransactions = [
  { id: 1, name: "午餐 · 简餐", category: "餐饮", amount: -38, time: "今天 12:36", icon: "utensils" },
  { id: 2, name: "项目奖金", category: "收入", amount: 3200, time: "今天 09:12", icon: "badge-dollar-sign" },
  { id: 3, name: "地铁通勤", category: "交通", amount: -6, time: "昨天 19:04", icon: "train-front" },
];

const poems = [
  {
    title: "山居秋暝", author: "唐 · 王维",
    lines: "空山新雨后，天气晚来秋。<br>明月松间照，清泉石上流。",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    translation: "空旷的山野刚刚沐浴过一场新雨，夜幕降临，空气中已经有了秋意。明月穿过松林洒下清光，清泉在山石上淙淙流淌。",
    insight: "诗中既有雨后秋山的清新，也有松、月、泉、石构成的静谧秩序。王维把动态的清泉与静态的明月并置，让画面有声、有色，也让心境归于澄明。",
  },
  {
    title: "望庐山瀑布", author: "唐 · 李白",
    lines: "日照香炉生紫烟，遥看瀑布挂前川。<br>飞流直下三千尺，疑是银河落九天。",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=85",
    translation: "阳光照耀香炉峰，升起紫色烟霞；远远望去，瀑布像一匹白练悬挂山前。水流从高处飞泻而下，让人疑心是银河从九天倾落。",
    insight: "李白用“挂”字让流动的瀑布有了凝固的形态，再用夸张的尺度把自然奇景推向浪漫想象。读来既有视觉冲击，也有昂扬开阔的气势。",
  },
];

const xhsPoetryInspirations = [
  { theme: "山水治愈", title: "明月松间照", excerpt: "清泉石上流 · 王维", keyword: "山水治愈 古诗词 意境" },
  { theme: "江南烟雨", title: "多少楼台烟雨中", excerpt: "南朝四百八十寺 · 杜牧", keyword: "江南烟雨 古诗词 意境" },
  { theme: "月色思念", title: "海上生明月", excerpt: "天涯共此时 · 张九龄", keyword: "月色思念 古诗词 文案" },
  { theme: "人间清醒", title: "坐看云起时", excerpt: "行到水穷处 · 王维", keyword: "人间清醒 古诗词 意境" },
];

const focusRiddles = [
  "越忙越有空？\n答案：明天。",
  "待办为何多？\n因为会繁殖。",
  "计划很完整，\n就是没开始。",
  "先做重要的，\n不急的装急。",
  "灵感去哪了？\n它去洗澡了。",
];

const copyItems = [
  { category: "美食", label: "烟火气", text: "认真吃饭，是生活写给普通日子的情书。今日份快乐，藏在热气腾腾的一餐里。", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=85", heat: "2.4w 灵感" },
  { category: "旅行", label: "去远方", text: "出发的意义，不是逃离日常，而是带着新的目光重新回来。山川湖海，替我松开了生活的褶皱。", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85", heat: "1.8w 灵感" },
  { category: "生活", label: "小确幸", text: "允许日子偶尔没有答案。晒晒太阳，吹吹晚风，生活会在不经意间把温柔还给你。", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=85", heat: "3.1w 灵感" },
  { category: "舞蹈", label: "自在生长", text: "音乐响起的那一刻，身体比语言更诚实。每一次旋转，都是我和世界重新打招呼。", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=85", heat: "1.3w 灵感" },
];

const defaultFiles = [
  { id: 1, name: "七夕活动复盘报告.pptx", type: "PPT", tag: "项目复盘", size: "8.4 MB" },
  { id: 2, name: "7月达人合作数据.xlsx", type: "XLS", tag: "运营数据", size: "1.2 MB" },
  { id: 3, name: "品牌文案规范V3.docx", type: "DOC", tag: "品牌资料", size: "640 KB" },
];

const defaultProfile = { name: "林夏", role: "内容运营组 · 负责人" };
const defaultMembers = [
  { id: 1, name: "周岚", detail: "已完成 4 项 · 无卡点", status: "已提交", color: "#427f72" },
  { id: 2, name: "陈野", detail: "已完成 3 项 · 1 个卡点", status: "已提交", color: "#b66b4e" },
  { id: 3, name: "苏木", detail: "已完成 5 项 · 无卡点", status: "已提交", color: "#536d91" },
  { id: 4, name: "安宁", detail: "尚未提交今日总结", status: "待提交", color: "#9b667b", waiting: true },
  { id: 5, name: "许川", detail: "已完成 2 项 · 1 个卡点", status: "已提交", color: "#6c7450" },
  { id: 6, name: "方可", detail: "尚未提交今日总结", status: "待提交", color: "#8a7463", waiting: true },
];

const defaultProjects = [
  { id: 1, name: "七夕整合营销", progress: 78, blocker: "等待品牌方确认终版视觉，预计今天 18:00 前反馈。", people: "林夏 · 陈野", due: "8月4日" },
  { id: 2, name: "8月达人矩阵", progress: 56, blocker: "腰部达人报价超出预算 12%，需要调整组合。", people: "周岚 · 许川", due: "8月8日" },
  { id: 3, name: "私域内容焕新", progress: 52, blocker: "", people: "苏木 · 方可", due: "8月12日" },
];

const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); },
};

let tasks = store.get("shiguang_tasks", defaultTasks);
let transactions = store.get("shiguang_transactions", defaultTransactions);
let files = store.get("shiguang_files", defaultFiles);
let profile = store.get("shiguang_profile", defaultProfile);
let teamMembers = store.get("shiguang_members", defaultMembers);
let projects = store.get("shiguang_projects", defaultProjects);
let summaries = store.get("shiguang_summaries", []);
let currentFilter = "all";
let activeModule = "";
let poemIndex = Number(store.get("shiguang_poem", 0)) || 0;

function submittedMemberCount() {
  return Math.min(teamMembers.length, teamMembers.filter((item) => item.status === "已提交").length + (summaries[0] ? 1 : 0));
}

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function init() {
  setDate();
  renderFocusRiddle();
  renderProfile();
  renderTasks();
  updateTaskStats();
  checkDueReminders();
  bindEvents();
  registerServiceWorker();
  window.setInterval(checkDueReminders, 60 * 1000);
  if (window.lucide) lucide.createIcons();
  if (location.hash === "#daily-summary") window.setTimeout(showSummaryForm, 180);
}

function renderFocusRiddle() {
  const dayIndex = new Date().getDate() % focusRiddles.length;
  $("#focusRiddle").textContent = focusRiddles[dayIndex];
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }, { once: true });
}

function setDate() {
  const now = new Date();
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  $("#todayDate").textContent = `${now.getMonth() + 1}月${now.getDate()}日 · ${weekdays[now.getDay()]}`;
  const hour = now.getHours();
  $("#pageTitle").textContent = `${hour < 11 ? "早上好" : hour < 14 ? "中午好" : hour < 18 ? "下午好" : "晚上好"}，${profile.name}`;
}

function getInitials(name) {
  const clean = String(name || "拾光").trim();
  return clean.length <= 2 ? clean : clean.slice(0, 2);
}

function renderProfile() {
  const initials = getInitials(profile.name);
  $("#profileInitials").textContent = initials;
  $("#profileAvatar").textContent = initials;
  $("#profileName").textContent = profile.name;
  $("#profileRole").textContent = profile.role;
  $("#teamSummary").textContent = `内容运营组 · ${teamMembers.length} 人`;
  const submittedCount = submittedMemberCount();
  $("#summaryStatus").textContent = `团队 ${submittedCount}/${teamMembers.length} 已提交`;
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const route = event.target.closest("[data-route]");
    const module = event.target.closest("[data-module]");
    const action = event.target.closest("[data-action]");
    const filter = event.target.closest("[data-filter]");
    const toggle = event.target.closest("[data-toggle-task]");
    const copy = event.target.closest("[data-copy]");
    const copyFilter = event.target.closest("[data-copy-filter]");
    if (route) navigate(route.dataset.route);
    if (module) openModule(module.dataset.module);
    if (action) handleAction(action.dataset.action);
    if (filter) {
      currentFilter = filter.dataset.filter;
      $$("#taskFilters button").forEach((button) => button.classList.toggle("active", button === filter));
      renderTaskList();
    }
    if (toggle) toggleTask(Number(toggle.dataset.toggleTask));
    if (copy) copyText(copy.dataset.copy);
    if (copyFilter) renderCopyFeed(copyFilter.dataset.copyFilter);
  });

  $("#sheetBackdrop").addEventListener("click", closeAllSheets);
}

function navigate(view) {
  $$(".view").forEach((section) => section.classList.toggle("active", section.dataset.view === view));
  $$(".bottom-nav [data-route]").forEach((button) => button.classList.toggle("active", button.dataset.route === view));
  const titles = { home: greetingTitle(), tasks: "任务清单", tools: "效率工具", mine: "个人空间" };
  $("#pageTitle").textContent = titles[view];
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function greetingTitle() {
  const hour = new Date().getHours();
  return `${hour < 11 ? "早上好" : hour < 14 ? "中午好" : hour < 18 ? "下午好" : "晚上好"}，${profile.name}`;
}

function renderTasks() {
  renderHomeTasks();
  renderTaskList();
}

function renderHomeTasks() {
  const top = [...tasks].sort((a, b) => Number(a.done) - Number(b.done) || priorityRank(a.priority) - priorityRank(b.priority)).slice(0, 3);
  $("#homeTodoList").innerHTML = top.map((task) => `
    <article class="compact-task ${task.done ? "done" : ""}">
      <button class="check-control" data-toggle-task="${task.id}" aria-label="${task.done ? "恢复" : "完成"}${escapeHtml(task.title)}"><i data-lucide="check"></i></button>
      <div class="task-copy"><strong>${escapeHtml(task.title)}</strong><small>${escapeHtml(task.due)} · ${escapeHtml(task.reminder)}</small></div>
      <span class="priority ${task.priority.toLowerCase()}">${task.priority}</span>
    </article>`).join("");
  refreshIcons();
}

function renderTaskList() {
  const filtered = tasks.filter((task) => currentFilter === "all" || (currentFilter === "done" ? task.done : task.priority === currentFilter && !task.done));
  $("#taskList").innerHTML = filtered.length ? filtered.map((task) => `
    <article class="task-card ${task.done ? "done" : ""}" data-priority="${task.priority}">
      <button class="check-control ${task.done ? "checked" : ""}" data-toggle-task="${task.id}" aria-label="切换完成状态"><i data-lucide="check"></i></button>
      <div><h3>${escapeHtml(task.title)}</h3><div class="task-meta"><span class="priority ${task.priority.toLowerCase()}">${task.priority}</span><span><i data-lucide="clock-3"></i>${escapeHtml(task.due)}</span><span><i data-lucide="bell"></i>${escapeHtml(task.reminder)}</span></div></div>
      <button class="more-button" aria-label="更多"><i data-lucide="ellipsis-vertical"></i></button>
    </article>`).join("") : `<div class="empty-state"><i data-lucide="inbox"></i><p>这里暂时没有任务</p></div>`;
  refreshIcons();
}

function priorityRank(priority) { return { P0: 0, P1: 1, P2: 2 }[priority] ?? 3; }

function updateTaskStats() {
  const pending = tasks.filter((task) => !task.done);
  const done = tasks.filter((task) => task.done);
  const p0 = pending.filter((task) => task.priority === "P0");
  $("#taskPendingCount").textContent = pending.length;
  $("#taskP0Count").textContent = p0.length;
  $("#taskDoneCount").textContent = done.length;
  $("#taskBadge").textContent = pending.length;
  $("#taskBadge").hidden = pending.length === 0;
  $("#moduleTodoCount").textContent = `${pending.length} 项待处理`;
  const focus = tasks.filter((task) => task.priority !== "P2");
  const focusDone = focus.filter((task) => task.done).length;
  const percent = focus.length ? Math.round(focusDone / focus.length * 100) : 100;
  $("#focusCount").textContent = focus.length;
  $("#focusDone").textContent = focusDone;
  $("#homeRing").style.setProperty("--progress", percent);
  $("#homeRing strong").textContent = `${percent}%`;
}

function toggleTask(id) {
  tasks = tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task);
  store.set("shiguang_tasks", tasks);
  renderTasks();
  updateTaskStats();
  checkDueReminders();
  const completed = tasks.find((task) => task.id === id).done;
  if (completed) celebrateTask();
  showToast(completed ? "任务已完成" : "已恢复任务");
}

function celebrateTask() {
  const burst = $("#celebrationBurst");
  burst.classList.remove("show");
  void burst.offsetWidth;
  burst.classList.add("show");
  window.setTimeout(() => burst.classList.remove("show"), 850);
}

function openModule(module) {
  activeModule = module;
  const labels = {
    summary: ["团队协作", "每日工作总结"], progress: ["项目跟进", "任务进行中"], ledger: ["个人账本", "实时记账"],
    copy: ["内容灵感", "爆款文案提取"], poetry: ["每日一读", "古诗词推荐"], docs: ["文件中心", "文档归档"],
  };
  const [kicker, title] = labels[module];
  $("#sheetKicker").textContent = kicker;
  $("#sheetTitle").textContent = title;
  renderModule(module);
  openSheet("moduleSheet");
}

function renderModule(module) {
  const renders = { summary: renderSummary, progress: renderProgress, ledger: renderLedger, copy: () => renderCopyFeed("全部"), poetry: renderPoetry, docs: renderDocs };
  renders[module]();
  refreshIcons();
}

function renderSummary() {
  const latestSummary = summaries[0];
  const submittedCount = submittedMemberCount();
  $("#summaryStatus").textContent = `团队 ${submittedCount}/${teamMembers.length} 已提交`;
  $("#sheetContent").innerHTML = `
    <div class="summary-stats"><div class="highlight"><span>提交进度</span><strong>${submittedCount} / ${teamMembers.length}</strong></div><div><span>已完成任务</span><strong>${latestSummary ? latestSummary.doneCount : 23}</strong></div><div><span>团队卡点</span><strong>${latestSummary ? latestSummary.blockerCount : 2}</strong></div></div>
    <div class="action-row"><button class="button primary" data-action="share-summary"><i data-lucide="send"></i> 发送填写链接</button><button class="button secondary" data-action="submit-summary"><i data-lucide="file-pen-line"></i> 填写我的总结</button></div>
    <section class="sheet-section"><div class="sheet-section-head"><h3>团队提交情况</h3><span>更新于 16:42</span></div><div class="member-list">
      ${teamMembers.map((item) => member(item.name, item.detail, item.status, item.color, item.waiting)).join("")}
    </div></section>
    ${latestSummary ? `<section class="sheet-section"><div class="sheet-section-head"><h3>我的最新总结</h3><span>${latestSummary.createdLabel}</span></div><div class="summary-preview"><strong>完成</strong><p>${escapeHtml(latestSummary.done)}</p><strong>卡点</strong><p>${escapeHtml(latestSummary.blocker || "无")}</p><strong>明日计划</strong><p>${escapeHtml(latestSummary.next || "未填写")}</p></div></section>` : ""}
    <section class="sheet-section"><div class="sheet-section-head"><h3>完成趋势</h3><span>近 7 天</span></div><div class="week-chart"><div><i style="--h:55%"></i><span>一</span></div><div><i style="--h:70%"></i><span>二</span></div><div><i style="--h:62%"></i><span>三</span></div><div><i style="--h:88%"></i><span>四</span></div><div class="today"><i style="--h:75%"></i><span>五</span></div><div><i style="--h:28%"></i><span>六</span></div><div><i style="--h:18%"></i><span>日</span></div></div></section>`;
}

function member(name, detail, status, color, waiting = false) {
  return `<div class="member-row"><span class="member-avatar" style="--avatar:${escapeHtml(color)}">${escapeHtml(name.slice(-1))}</span><span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(detail)}</small></span><b class="status-pill ${waiting ? "waiting" : ""}">${escapeHtml(status)}</b></div>`;
}

function renderProgress() {
  const blockerCount = projects.filter((item) => item.blocker).length;
  const average = projects.length ? Math.round(projects.reduce((sum, item) => sum + Number(item.progress || 0), 0) / projects.length) : 0;
  $("#sheetContent").innerHTML = `
    <div class="summary-stats"><div class="highlight"><span>进行中</span><strong>${projects.length}</strong></div><div><span>平均进度</span><strong>${average}%</strong></div><div><span>待解卡点</span><strong>${blockerCount}</strong></div></div>
    <section class="sheet-section"><div class="sheet-section-head"><h3>项目进展</h3><button class="text-button" data-action="add-progress">新增任务 <i data-lucide="plus"></i></button></div>
      ${projects.map((item) => project(item.name, item.progress, item.blocker, item.people, item.due)).join("")}
    </section>`;
}

function project(name, progress, blocker, people, due) {
  return `<article class="progress-project"><div class="project-top"><h3>${escapeHtml(name)}</h3><span>${Number(progress) || 0}%</span></div><div class="progress-track"><i style="--w:${Number(progress) || 0}%"></i></div>${blocker ? `<div class="blocker"><i data-lucide="triangle-alert"></i><span>${escapeHtml(blocker)}</span></div>` : ""}<div class="project-meta"><span>${escapeHtml(people)}</span><span>截止 ${escapeHtml(due)}</span></div></article>`;
}

function renderLedger() {
  const income = transactions.filter((item) => item.amount > 0).reduce((sum, item) => sum + item.amount, 0) + 7800;
  const expense = Math.abs(transactions.filter((item) => item.amount < 0).reduce((sum, item) => sum + item.amount, 0)) + 2536;
  const balance = income - expense;
  $("#sheetContent").innerHTML = `
    <div class="balance-panel"><span>7 月结余</span><strong>¥ ${money(balance)}</strong><div class="money-split"><div><span>本月收入</span><strong>¥ ${money(income)}</strong></div><div><span>本月支出</span><strong>¥ ${money(expense)}</strong></div></div></div>
    <div class="action-row"><button class="button primary" data-action="add-expense"><i data-lucide="minus"></i> 记一笔支出</button><button class="button secondary" data-action="add-income"><i data-lucide="plus"></i> 记一笔收入</button></div>
    <section class="sheet-section"><div class="sheet-section-head"><h3>最近明细</h3><span>${transactions.length} 笔记录</span></div><div class="transaction-list">${transactions.map(transactionRow).join("")}</div></section>`;
}

function transactionRow(item) {
  return `<div class="transaction-row"><span class="transaction-icon"><i data-lucide="${item.icon}"></i></span><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.category)} · ${escapeHtml(item.time)}</small></span><b class="amount ${item.amount > 0 ? "income" : ""}">${item.amount > 0 ? "+" : "-"}¥${money(Math.abs(item.amount))}</b></div>`;
}

function renderCopyFeed(category) {
  $("#sheetContent").innerHTML = `
    <div class="category-chips">${["全部", "美食", "旅行", "生活", "舞蹈"].map((item) => `<button class="${item === category ? "active" : ""}" data-copy-filter="${item}">${item}</button>`).join("")}</div>
    <div class="copy-feed">${copyItems.filter((item) => category === "全部" || item.category === category).map((item) => `
      <article class="copy-card"><img src="${item.image}" alt="${item.category}文案配图" loading="lazy"><div class="copy-card-content"><span># ${item.category} · ${item.label}</span><p>${item.text}</p><div class="copy-card-footer"><span><i data-lucide="flame"></i> ${item.heat}</span><button data-copy="${encodeURIComponent(item.text)}"><i data-lucide="copy"></i> 复制文案</button></div></div></article>`).join("")}</div>`;
  refreshIcons();
}

function renderPoetry() {
  const poem = poems[poemIndex % poems.length];
  $("#sheetContent").innerHTML = `
    <div class="poem-hero"><img src="${poem.image}" alt="${poem.title}意境图"><div class="poem-text"><h3>${poem.title}</h3><p class="author">${poem.author}</p><p class="poem-lines">${poem.lines}</p></div></div>
    <div class="action-row"><button class="button dark" data-action="next-poem"><i data-lucide="refresh-cw"></i> 换一首</button><button class="button secondary" data-action="share-poem"><i data-lucide="share-2"></i> 分享诗句</button></div>
    <p class="share-hint"><i data-lucide="smartphone"></i>系统面板可选择微信联系人、朋友圈或小红书</p>
    <div class="analysis-block"><h4>诗意今译</h4><p>${poem.translation}</p></div><div class="analysis-block"><h4>一句赏析</h4><p>${poem.insight}</p></div>
    <section class="sheet-section xhs-poetry-section"><div class="sheet-section-head"><h3>小红书热门意境</h3><span>按主题发现</span></div><div class="xhs-poetry-scroll">${xhsPoetryInspirations.map(xhsPoetryCard).join("")}</div></section>`;
  refreshIcons();
}

function xhsPoetryCard(item) {
  const url = `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(item.keyword)}&source=web_explore_feed`;
  return `<a class="xhs-poetry-card" href="${url}" target="_blank" rel="noopener noreferrer"><span class="xhs-poetry-label"><i data-lucide="flame"></i>${escapeHtml(item.theme)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.excerpt)}</p><span class="xhs-poetry-link">去小红书看看 <i data-lucide="arrow-up-right"></i></span></a>`;
}

function renderDocs() {
  $("#sheetContent").innerHTML = `
    <label class="upload-zone"><input id="fileInput" type="file" multiple accept="image/*,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf"><i data-lucide="cloud-upload"></i><strong>点击上传文档</strong><span>支持图片、Word、Excel、PPT 和 PDF</span></label>
    <div class="action-row"><button class="button primary" data-action="choose-file"><i data-lucide="upload"></i> 选择文件</button><button class="button secondary" data-action="wps-sync"><i data-lucide="cloud"></i> 连接 WPS</button></div>
    <section class="sheet-section"><div class="sheet-section-head"><h3>最近归档</h3><span>${files.length} 个文件</span></div><div class="file-list">${files.map(fileRow).join("")}</div></section>`;
  setTimeout(() => $("#fileInput")?.addEventListener("change", handleFiles), 0);
}

function fileRow(file) {
  return `<div class="file-row"><span class="file-type">${escapeHtml(file.type)}</span><span><strong>${escapeHtml(file.name)}</strong><small>${escapeHtml(file.size)} <b class="tag">${escapeHtml(file.tag)}</b></small></span><i data-lucide="more-vertical"></i></div>`;
}

function handleAction(action) {
  const actions = {
    "close-sheet": closeAllSheets,
    "close-form": closeAllSheets,
    "add-todo": showTodoForm,
    "quick-add": showQuickAdd,
    "save-note": saveQuickNote,
    "share-summary": shareSummary,
    "submit-summary": showSummaryForm,
    "add-progress": showProgressForm,
    "add-expense": () => showMoneyForm("支出"),
    "add-income": () => showMoneyForm("收入"),
    "next-poem": nextPoem,
    "share-poem": sharePoem,
    "choose-file": () => $("#fileInput")?.click(),
    "wps-sync": showWpsStatus,
    "edit-profile": showProfileForm,
    "edit-team": showTeamForm,
    "reminder-settings": showReminderSettings,
    "enable-notifications": enableNotifications,
    "open-profile": () => navigate("mine"),
  };
  actions[action]?.();
}

function openSheet(id) {
  $("#sheetBackdrop").classList.add("visible");
  $$(".bottom-sheet").forEach((sheet) => sheet.classList.toggle("open", sheet.id === id));
  document.body.style.overflow = "hidden";
}

function closeAllSheets() {
  $("#sheetBackdrop").classList.remove("visible");
  $$(".bottom-sheet").forEach((sheet) => sheet.classList.remove("open"));
  document.body.style.overflow = "";
}

function showTodoForm() {
  $("#formTitle").textContent = "新增待办";
  $("#entryForm").innerHTML = `
    <div class="field"><label for="todoTitle">任务名称</label><input id="todoTitle" name="title" placeholder="例如：确认活动投放方案" required></div>
    <div class="field"><label>优先级</label><div class="priority-picker"><label><input type="radio" name="priority" value="P0"><span>P0 紧急</span></label><label><input type="radio" name="priority" value="P1" checked><span>P1 重要</span></label><label><input type="radio" name="priority" value="P2"><span>P2 常规</span></label></div></div>
    <div class="field"><label for="todoDue">截止时间</label><input id="todoDue" name="due" type="datetime-local"></div>
    <div class="field"><label for="todoReminder">预提醒</label><select id="todoReminder" name="reminder"><option>提前 30 分钟</option><option>提前 1 小时</option><option>提前 1 天</option><option>不提醒</option></select></div>
    <button class="button primary full" type="submit"><i data-lucide="check"></i> 创建待办</button>`;
  $("#entryForm").onsubmit = submitTodo;
  openSheet("formSheet");
  refreshIcons();
}

function submitTodo(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const dueValue = data.get("due");
  const reminder = String(data.get("reminder"));
  tasks.unshift({ id: Date.now(), title: data.get("title").trim(), priority: data.get("priority"), due: dueValue ? formatDue(dueValue) : "未设置时间", dueAt: dueValue || "", reminder, reminderMinutes: reminderToMinutes(reminder), done: false });
  store.set("shiguang_tasks", tasks);
  renderTasks();
  updateTaskStats();
  checkDueReminders();
  closeAllSheets();
  navigate("tasks");
  showToast("待办已创建");
}

function reminderToMinutes(value) {
  if (value === "提前 1 小时") return 60;
  if (value === "提前 1 天") return 24 * 60;
  if (value === "提前 30 分钟") return 30;
  return 0;
}

function showSummaryForm() {
  $("#formTitle").textContent = "填写今日总结";
  const latest = summaries[0] || {};
  $("#entryForm").innerHTML = `<div class="field"><label for="summaryDone">今日完成</label><textarea id="summaryDone" name="done" placeholder="列出今天完成的重点任务" required>${escapeHtml(latest.done || "")}</textarea></div><div class="field"><label for="summaryBlocker">遇到的卡点</label><textarea id="summaryBlocker" name="blocker" placeholder="没有卡点可填写“无”">${escapeHtml(latest.blocker || "")}</textarea></div><div class="field"><label for="summaryNext">明日计划</label><textarea id="summaryNext" name="next" placeholder="明天优先推进什么？">${escapeHtml(latest.next || "")}</textarea></div><button class="button primary full" type="submit"><i data-lucide="send"></i> 提交总结</button>`;
  $("#entryForm").onsubmit = submitSummary;
  openSheet("formSheet"); refreshIcons();
}

function submitSummary(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const done = String(data.get("done") || "").trim();
  if (!done) return;
  const blocker = String(data.get("blocker") || "").trim();
  const summary = {
    id: Date.now(),
    done,
    blocker,
    next: String(data.get("next") || "").trim(),
    doneCount: done.split(/[,，、\n]/).map((item) => item.trim()).filter(Boolean).length,
    blockerCount: blocker && blocker !== "无" ? 1 : 0,
    createdAt: new Date().toISOString(),
    createdLabel: "刚刚",
  };
  summaries = [summary, ...summaries.filter((item) => new Date(item.createdAt).toDateString() !== new Date().toDateString())];
  store.set("shiguang_summaries", summaries);
  closeAllSheets();
  showToast("今日总结已保存");
  setTimeout(() => openModule("summary"), 180);
}

function showProgressForm() {
  $("#formTitle").textContent = "新增进行中任务";
  $("#entryForm").innerHTML = `<div class="field"><label for="progressTitle">任务名称</label><input id="progressTitle" name="title" placeholder="输入任务名称" required></div><div class="field"><label for="progressValue">当前进度 <output id="progressOutput">30%</output></label><input id="progressValue" name="progress" type="range" min="0" max="100" value="30"></div><div class="field"><label for="progressBlocker">当前卡点</label><textarea id="progressBlocker" name="blocker" placeholder="描述需要协助解决的问题"></textarea></div><div class="field"><label for="progressPeople">协作成员</label><input id="progressPeople" name="people" placeholder="例如：${escapeHtml(profile.name)} · 周岚"></div><div class="field"><label for="progressDue">截止时间</label><input id="progressDue" name="due" placeholder="例如：8月15日"></div><button class="button primary full" type="submit">保存任务进度</button>`;
  $("#progressValue").addEventListener("input", (event) => { $("#progressOutput").textContent = `${event.target.value}%`; });
  $("#entryForm").onsubmit = submitProgress;
  openSheet("formSheet"); refreshIcons();
}

function submitProgress(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const title = String(data.get("title") || "").trim();
  if (!title) return;
  projects = [{
    id: Date.now(), name: title, progress: Number(data.get("progress")) || 0,
    blocker: String(data.get("blocker") || "").trim(), people: String(data.get("people") || profile.name).trim(),
    due: String(data.get("due") || "未设置").trim(),
  }, ...projects];
  store.set("shiguang_projects", projects);
  closeAllSheets();
  showToast("进行中任务已保存");
  setTimeout(() => openModule("progress"), 180);
}

function showProfileForm() {
  $("#formTitle").textContent = "编辑个人资料";
  $("#entryForm").innerHTML = `<div class="field"><label for="profileNameInput">用户名</label><input id="profileNameInput" name="name" maxlength="12" value="${escapeHtml(profile.name)}" required></div><div class="field"><label for="profileRoleInput">职位 / 小组</label><input id="profileRoleInput" name="role" maxlength="24" value="${escapeHtml(profile.role)}" required></div><button class="button primary full" type="submit"><i data-lucide="check"></i> 保存个人资料</button>`;
  $("#entryForm").onsubmit = submitProfile;
  openSheet("formSheet"); refreshIcons();
}

function submitProfile(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "").trim();
  const role = String(data.get("role") || "").trim();
  if (!name || !role) return;
  profile = { name, role };
  store.set("shiguang_profile", profile);
  renderProfile();
  setDate();
  closeAllSheets();
  showToast("个人资料已更新");
}

function showTeamForm() {
  $("#formTitle").textContent = "修改团队成员";
  $("#entryForm").innerHTML = `<p class="form-note">修改成员名称后，每日总结中的团队提交列表会同步更新。</p>${teamMembers.map((item) => `<div class="field"><label for="member-${item.id}">成员 ${item.id}</label><input id="member-${item.id}" name="member-${item.id}" maxlength="12" value="${escapeHtml(item.name)}" required></div>`).join("")}<button class="button primary full" type="submit"><i data-lucide="users"></i> 保存成员名称</button>`;
  $("#entryForm").onsubmit = submitTeam;
  openSheet("formSheet"); refreshIcons();
}

function submitTeam(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  teamMembers = teamMembers.map((item) => ({ ...item, name: String(data.get(`member-${item.id}`) || item.name).trim() || item.name }));
  store.set("shiguang_members", teamMembers);
  renderProfile();
  closeAllSheets();
  showToast("团队成员名称已更新");
}

function showReminderSettings() {
  const supported = "Notification" in window;
  const status = supported ? (Notification.permission === "granted" ? "系统提醒已开启" : "系统提醒尚未开启") : "当前浏览器不支持系统提醒";
  $("#formTitle").textContent = "提醒设置";
  $("#entryForm").innerHTML = `<p class="form-note">${status}。应用打开时会检查设置了截止时间的待办；iPhone 需要允许通知后才能显示系统提醒。</p><button class="button primary full" type="button" data-action="enable-notifications">开启系统提醒</button><button class="button secondary full" type="button" data-action="close-form">完成</button>`;
  openSheet("formSheet"); refreshIcons();
}

async function enableNotifications() {
  if (!("Notification" in window)) { showToast("当前浏览器不支持系统提醒"); return; }
  const permission = await Notification.requestPermission();
  if (permission === "granted") { store.set("shiguang_notifications", true); showToast("系统提醒已开启"); closeAllSheets(); checkDueReminders(); }
  else showToast("未获得通知权限");
}

function checkDueReminders() {
  const now = Date.now();
  const notified = store.get("shiguang_notified", {});
  let changed = false;
  tasks.forEach((task) => {
    if (task.done || !task.dueAt || !task.reminderMinutes) return;
    const reminderAt = new Date(task.dueAt).getTime() - task.reminderMinutes * 60 * 1000;
    if (reminderAt <= now && now - reminderAt < 24 * 60 * 60 * 1000 && !notified[task.id]) {
      notified[task.id] = true;
      changed = true;
      if (window.Notification?.permission === "granted") new Notification("拾光待办提醒", { body: `${task.title} · ${task.due}` });
      else showToast(`待办提醒：${task.title}`);
    }
  });
  if (changed) store.set("shiguang_notified", notified);
}

function showWpsStatus() {
  $("#formTitle").textContent = "连接 WPS";
  $("#entryForm").innerHTML = `<p class="form-note">WPS 同步需要 WPS 开放平台的应用 ID、授权回调地址和 OAuth 授权。当前版本已经完成本地文档归档，尚未配置你的 WPS 应用凭据，因此不会伪造“已同步”。</p><div class="field"><label>当前状态</label><input value="待授权配置" readonly></div><button class="button secondary full" type="button" data-action="close-form">知道了</button>`;
  openSheet("formSheet"); refreshIcons();
}

function showMoneyForm(type) {
  $("#formTitle").textContent = `记一笔${type}`;
  $("#entryForm").innerHTML = `<div class="field"><label>金额</label><input name="amount" type="number" min="0.01" step="0.01" inputmode="decimal" placeholder="0.00" required></div><div class="field"><label>用途 / 来源</label><input name="name" placeholder="例如：下午茶" required></div><div class="field"><label>分类</label><select name="category"><option>餐饮</option><option>交通</option><option>购物</option><option>娱乐</option><option>收入</option><option>其他</option></select></div><button class="button primary full" type="submit">保存记录</button>`;
  $("#entryForm").onsubmit = (event) => submitMoney(event, type);
  openSheet("formSheet");
}

function submitMoney(event, type) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const value = Number(data.get("amount"));
  transactions.unshift({ id: Date.now(), name: data.get("name"), category: type === "收入" ? "收入" : data.get("category"), amount: type === "收入" ? value : -value, time: "刚刚", icon: type === "收入" ? "badge-dollar-sign" : "shopping-bag" });
  store.set("shiguang_transactions", transactions);
  closeAllSheets();
  showToast("账目已记录");
  setTimeout(() => openModule("ledger"), 200);
}

function showQuickAdd() {
  $("#formTitle").textContent = "快速新增";
  $("#entryForm").innerHTML = `<button class="button primary full" type="button" data-action="add-todo"><i data-lucide="circle-check-big"></i> 新建待办任务</button><button class="button secondary full" type="button" data-action="submit-summary"><i data-lucide="clipboard-pen"></i> 填写今日总结</button><button class="button secondary full" type="button" data-action="add-expense"><i data-lucide="wallet-cards"></i> 记录一笔支出</button><button class="button secondary full" type="button" data-action="choose-file" onclick="closeAllSheets();setTimeout(()=>openModule('docs'),180)"><i data-lucide="file-up"></i> 上传并归档文档</button>`;
  openSheet("formSheet"); refreshIcons();
}

function saveQuickNote() {
  const input = $("#quickNote");
  if (!input.value.trim()) { showToast("先写下一点内容"); return; }
  const notes = store.get("shiguang_notes", []);
  notes.unshift({ text: input.value.trim(), createdAt: new Date().toISOString() });
  store.set("shiguang_notes", notes);
  input.value = "";
  showToast("已收进灵感箱");
}

async function shareSummary() {
  const text = "请填写今日工作总结：完成事项、当前卡点与明日计划。";
  const url = location.href.split("#")[0] + "#daily-summary";
  try {
    if (navigator.share) await navigator.share({ title: "今日工作总结", text, url });
    else await navigator.clipboard.writeText(`${text}\n${url}`);
    showToast(navigator.share ? "已打开分享面板" : "填写链接已复制");
  } catch (error) {
    if (error.name !== "AbortError") showToast("分享未完成，请重试");
  }
}

async function sharePoem() {
  const poem = poems[poemIndex % poems.length];
  const text = `${poem.title}\n${poem.author}\n${poem.lines.replace(/<br>/g, "\n")}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: `每日诗词 · ${poem.title}`,
        text,
      });
      showToast("已打开分享面板");
      return;
    }

    await navigator.clipboard.writeText(text);
    showToast("诗句已复制，可粘贴到微信或小红书");
  } catch (error) {
    if (error?.name !== "AbortError") showToast("分享未完成，请重试");
  }
}

function nextPoem() {
  poemIndex = (poemIndex + 1) % poems.length;
  store.set("shiguang_poem", poemIndex);
  renderPoetry(); refreshIcons();
}

function handleFiles(event) {
  const selected = [...event.target.files];
  if (!selected.length) return;
  const additions = selected.map((file, index) => ({ id: Date.now() + index, name: file.name, type: fileExtension(file.name), tag: guessTag(file.name), size: formatSize(file.size) }));
  files = [...additions, ...files];
  store.set("shiguang_files", files);
  renderDocs(); refreshIcons(); showToast(`${selected.length} 个文件已归档`);
}

function copyText(encoded) {
  const text = decodeURIComponent(encoded).replace(/<br>/g, "\n");
  navigator.clipboard?.writeText(text).then(() => showToast("内容已复制")).catch(() => showToast("复制失败，请长按选择"));
}

function showToast(message) {
  const toast = $("#toast");
  $("span", toast).textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2000);
}

function money(value) { return Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 }); }
function formatDue(value) { const date = new Date(value); return `${date.getMonth() + 1}月${date.getDate()}日 ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`; }
function formatSize(size) { if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`; return `${(size / 1024 / 1024).toFixed(1)} MB`; }
function fileExtension(name) { const ext = name.split(".").pop().toUpperCase(); return ({ DOCX: "DOC", XLSX: "XLS", PPTX: "PPT", JPEG: "IMG", JPG: "IMG", PNG: "IMG" }[ext] || ext).slice(0, 4); }
function guessTag(name) { if (/复盘|报告/.test(name)) return "项目复盘"; if (/数据|表/.test(name)) return "运营数据"; if (/图片|素材|海报/.test(name)) return "视觉素材"; return "待整理"; }
function escapeHtml(value) { const div = document.createElement("div"); div.textContent = String(value); return div.innerHTML; }
function refreshIcons() { if (window.lucide) lucide.createIcons(); }

window.closeAllSheets = closeAllSheets;
window.openModule = openModule;
window.addEventListener("DOMContentLoaded", init);
