chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(error => {
  console.error('LinkVideo-Agent: 无法启用点击图标打开侧边栏', error)
})
