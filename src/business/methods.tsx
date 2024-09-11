export const getPageName = (path: string) => {
    switch (path) {
        case '/management/report':
            return 'Report Page';
        case '/management/project':
            return 'Project Page';
        case '/management/manager':
            return 'Manager Page';
        default:
            return 'Dashboard';
    }
};