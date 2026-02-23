export const companies = {
  list: {
    companies: [
      {
        id: 1,
        name: 'Acme Corp',
        nickname: 'Acme',
        company_type: 'Client',
        city: 'Springfield',
        state: 'IL',
        phone_number: '555-0100',
        website: 'https://acme.com',
        archived: false,
        slug: 'acme-corp',
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-06-01T12:00:00Z',
      },
      {
        id: 2,
        name: 'Widget Inc',
        nickname: 'Widget',
        company_type: 'Client',
        city: 'Portland',
        state: 'OR',
        archived: false,
        slug: 'widget-inc',
        created_at: '2024-02-20T08:30:00Z',
        updated_at: '2024-05-15T14:00:00Z',
      },
    ],
  },
  single: {
    company: {
      id: 1,
      name: 'Acme Corp',
      nickname: 'Acme',
      company_type: 'Client',
      city: 'Springfield',
      state: 'IL',
      phone_number: '555-0100',
      website: 'https://acme.com',
      archived: false,
      slug: 'acme-corp',
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-06-01T12:00:00Z',
    },
  },
  created: {
    company: {
      id: 3,
      name: 'New Company',
      company_type: 'Client',
      archived: false,
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    company: {
      id: 1,
      name: 'Updated Acme Corp',
      nickname: 'Acme',
      company_type: 'Client',
      archived: false,
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const assets = {
  list: {
    assets: [
      {
        id: 1,
        company_id: 1,
        asset_layout_id: 1,
        name: 'Server-01',
        primary_serial: 'SN12345',
        primary_model: 'PowerEdge R740',
        primary_manufacturer: 'Dell',
        archived: false,
        created_at: '2024-01-10T09:00:00Z',
        updated_at: '2024-05-20T11:00:00Z',
      },
      {
        id: 2,
        company_id: 1,
        asset_layout_id: 2,
        name: 'Switch-Core-01',
        primary_serial: 'SN67890',
        primary_manufacturer: 'Cisco',
        archived: false,
        created_at: '2024-02-15T10:00:00Z',
        updated_at: '2024-06-01T09:00:00Z',
      },
    ],
  },
  single: {
    asset: {
      id: 1,
      company_id: 1,
      asset_layout_id: 1,
      name: 'Server-01',
      primary_serial: 'SN12345',
      primary_model: 'PowerEdge R740',
      primary_manufacturer: 'Dell',
      archived: false,
      created_at: '2024-01-10T09:00:00Z',
      updated_at: '2024-05-20T11:00:00Z',
    },
  },
  created: {
    asset: {
      id: 3,
      company_id: 1,
      asset_layout_id: 1,
      name: 'New Server',
      archived: false,
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    asset: {
      id: 1,
      company_id: 1,
      asset_layout_id: 1,
      name: 'Updated Server-01',
      archived: false,
      created_at: '2024-01-10T09:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const assetLayouts = {
  list: {
    asset_layouts: [
      {
        id: 1,
        name: 'Server',
        icon: 'fas fa-server',
        color: '#4A90D9',
        active: true,
        include_passwords: true,
        include_files: true,
        created_at: '2024-01-01T08:00:00Z',
        updated_at: '2024-03-15T10:00:00Z',
      },
      {
        id: 2,
        name: 'Network Switch',
        icon: 'fas fa-network-wired',
        color: '#27AE60',
        active: true,
        created_at: '2024-01-01T08:00:00Z',
        updated_at: '2024-03-15T10:00:00Z',
      },
    ],
  },
  single: {
    asset_layout: {
      id: 1,
      name: 'Server',
      icon: 'fas fa-server',
      color: '#4A90D9',
      active: true,
      include_passwords: true,
      include_files: true,
      fields: [
        { id: 1, label: 'Hostname', field_type: 'Text', required: true, position: 1 },
        { id: 2, label: 'IP Address', field_type: 'Text', required: false, position: 2 },
      ],
      created_at: '2024-01-01T08:00:00Z',
      updated_at: '2024-03-15T10:00:00Z',
    },
  },
  created: {
    asset_layout: {
      id: 3,
      name: 'New Layout',
      active: true,
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    asset_layout: {
      id: 1,
      name: 'Updated Server Layout',
      active: true,
      created_at: '2024-01-01T08:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const assetPasswords = {
  list: {
    asset_passwords: [
      {
        id: 1,
        company_id: 1,
        name: 'Admin Password',
        username: 'admin',
        password: 'securepass123',
        url: 'https://server01.acme.com',
        password_type: 'login',
        created_at: '2024-01-20T09:00:00Z',
        updated_at: '2024-04-10T11:00:00Z',
      },
      {
        id: 2,
        company_id: 1,
        name: 'Root SSH Key',
        username: 'root',
        password_type: 'ssh_key',
        created_at: '2024-02-15T10:00:00Z',
        updated_at: '2024-05-01T14:00:00Z',
      },
    ],
  },
  single: {
    asset_password: {
      id: 1,
      company_id: 1,
      name: 'Admin Password',
      username: 'admin',
      password: 'securepass123',
      url: 'https://server01.acme.com',
      password_type: 'login',
      created_at: '2024-01-20T09:00:00Z',
      updated_at: '2024-04-10T11:00:00Z',
    },
  },
  created: {
    asset_password: {
      id: 3,
      company_id: 1,
      name: 'New Password',
      username: 'newuser',
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    asset_password: {
      id: 1,
      company_id: 1,
      name: 'Updated Password',
      username: 'admin',
      created_at: '2024-01-20T09:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const articles = {
  list: {
    articles: [
      {
        id: 1,
        name: 'Onboarding Guide',
        content: '<p>Welcome to Acme Corp...</p>',
        company_id: 1,
        draft: false,
        enable_sharing: true,
        created_at: '2024-01-05T08:00:00Z',
        updated_at: '2024-04-20T10:00:00Z',
      },
      {
        id: 2,
        name: 'VPN Setup Instructions',
        content: '<p>Follow these steps...</p>',
        company_id: 1,
        draft: false,
        created_at: '2024-02-10T09:00:00Z',
        updated_at: '2024-05-15T11:00:00Z',
      },
    ],
  },
  single: {
    article: {
      id: 1,
      name: 'Onboarding Guide',
      content: '<p>Welcome to Acme Corp...</p>',
      company_id: 1,
      draft: false,
      enable_sharing: true,
      created_at: '2024-01-05T08:00:00Z',
      updated_at: '2024-04-20T10:00:00Z',
    },
  },
  created: {
    article: {
      id: 3,
      name: 'New Article',
      draft: true,
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    article: {
      id: 1,
      name: 'Updated Onboarding Guide',
      draft: false,
      created_at: '2024-01-05T08:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const websites = {
  list: {
    websites: [
      {
        id: 1,
        name: 'Acme Website',
        url: 'https://acme.com',
        company_id: 1,
        paused: false,
        monitoring_status: 'up',
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-06-01T12:00:00Z',
      },
      {
        id: 2,
        name: 'Widget Portal',
        url: 'https://portal.widget.com',
        company_id: 2,
        paused: false,
        monitoring_status: 'up',
        created_at: '2024-02-20T08:30:00Z',
        updated_at: '2024-05-15T14:00:00Z',
      },
    ],
  },
  single: {
    website: {
      id: 1,
      name: 'Acme Website',
      url: 'https://acme.com',
      company_id: 1,
      paused: false,
      monitoring_status: 'up',
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-06-01T12:00:00Z',
    },
  },
  created: {
    website: {
      id: 3,
      name: 'New Website',
      url: 'https://new.example.com',
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    website: {
      id: 1,
      name: 'Updated Acme Website',
      url: 'https://acme.com',
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const folders = {
  list: {
    folders: [
      {
        id: 1,
        name: 'Documentation',
        icon: 'fas fa-folder',
        company_id: 1,
        created_at: '2024-01-10T09:00:00Z',
        updated_at: '2024-05-20T11:00:00Z',
      },
      {
        id: 2,
        name: 'Policies',
        icon: 'fas fa-folder',
        company_id: 1,
        parent_folder_id: 1,
        created_at: '2024-02-15T10:00:00Z',
        updated_at: '2024-06-01T09:00:00Z',
      },
    ],
  },
  single: {
    folder: {
      id: 1,
      name: 'Documentation',
      icon: 'fas fa-folder',
      company_id: 1,
      created_at: '2024-01-10T09:00:00Z',
      updated_at: '2024-05-20T11:00:00Z',
    },
  },
  created: {
    folder: {
      id: 3,
      name: 'New Folder',
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    folder: {
      id: 1,
      name: 'Updated Documentation',
      created_at: '2024-01-10T09:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const procedures = {
  list: {
    procedures: [
      {
        id: 1,
        name: 'Server Reboot Procedure',
        description: 'Steps to safely reboot production servers',
        company_id: 1,
        created_at: '2024-01-10T09:00:00Z',
        updated_at: '2024-05-20T11:00:00Z',
      },
      {
        id: 2,
        name: 'Backup Verification',
        description: 'Weekly backup verification checklist',
        company_id: 1,
        created_at: '2024-02-15T10:00:00Z',
        updated_at: '2024-06-01T09:00:00Z',
      },
    ],
  },
  single: {
    procedure: {
      id: 1,
      name: 'Server Reboot Procedure',
      description: 'Steps to safely reboot production servers',
      company_id: 1,
      created_at: '2024-01-10T09:00:00Z',
      updated_at: '2024-05-20T11:00:00Z',
    },
  },
  created: {
    procedure: {
      id: 3,
      name: 'New Procedure',
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    procedure: {
      id: 1,
      name: 'Updated Reboot Procedure',
      created_at: '2024-01-10T09:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};

export const activityLogs = {
  list: {
    activity_logs: [
      {
        id: 1,
        user_id: 1,
        user_email: 'admin@acme.com',
        action: 'created',
        record_type: 'Company',
        record_id: 1,
        record_name: 'Acme Corp',
        ip_address: '192.168.1.100',
        source: 'web',
        created_at: '2024-06-01T10:00:00Z',
      },
      {
        id: 2,
        user_id: 1,
        user_email: 'admin@acme.com',
        action: 'updated',
        record_type: 'Asset',
        record_id: 1,
        record_name: 'Server-01',
        ip_address: '192.168.1.100',
        source: 'api',
        created_at: '2024-06-01T11:00:00Z',
      },
    ],
  },
};

export const relations = {
  list: {
    relations: [
      {
        id: 1,
        fromable_type: 'Asset',
        fromable_id: 1,
        toable_type: 'Asset',
        toable_id: 2,
        description: 'Connected to',
      },
      {
        id: 2,
        fromable_type: 'Company',
        fromable_id: 1,
        toable_type: 'Website',
        toable_id: 1,
        description: 'Owns',
      },
    ],
  },
  created: {
    relation: {
      id: 3,
      fromable_type: 'Asset',
      fromable_id: 1,
      toable_type: 'Company',
      toable_id: 1,
      description: 'Belongs to',
    },
  },
};

export const magicDash = {
  list: {
    magic_dash: [
      {
        id: 1,
        title: 'Server Health',
        company_name: 'Acme Corp',
        company_id: 1,
        content: 'All servers operational',
        shade: 'success',
        icon: 'fas fa-check-circle',
        created_at: '2024-06-01T10:00:00Z',
        updated_at: '2024-06-01T12:00:00Z',
      },
      {
        id: 2,
        title: 'Backup Status',
        company_name: 'Acme Corp',
        company_id: 1,
        content: '2 backups pending',
        shade: 'warning',
        icon: 'fas fa-exclamation-triangle',
        created_at: '2024-06-01T10:00:00Z',
        updated_at: '2024-06-01T12:00:00Z',
      },
    ],
  },
  single: {
    magic_dash: {
      id: 1,
      title: 'Server Health',
      company_name: 'Acme Corp',
      company_id: 1,
      content: 'All servers operational',
      shade: 'success',
      icon: 'fas fa-check-circle',
      created_at: '2024-06-01T10:00:00Z',
      updated_at: '2024-06-01T12:00:00Z',
    },
  },
  created: {
    magic_dash: {
      id: 3,
      title: 'New Dashboard',
      content: 'Custom content',
      created_at: '2024-07-01T10:00:00Z',
      updated_at: '2024-07-01T10:00:00Z',
    },
  },
  updated: {
    magic_dash: {
      id: 1,
      title: 'Updated Server Health',
      content: 'All operational',
      created_at: '2024-06-01T10:00:00Z',
      updated_at: '2024-07-01T12:00:00Z',
    },
  },
};
