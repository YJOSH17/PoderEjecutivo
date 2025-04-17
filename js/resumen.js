
  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
  }

  function closeSidebar(e) {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar.contains(e.target) && !e.target.classList.contains('menu-toggle')) {
      sidebar.classList.remove('show');
    }
  }  