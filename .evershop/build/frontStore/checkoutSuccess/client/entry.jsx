
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    '137dcfd8bf7950dd6201684efdcb40a1': {
      id: '137dcfd8bf7950dd6201684efdcb40a1',
      sortOrder: 5,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/all/SearchBox.jsx')
    },
    '5248a628c0ba0eb2edc726fbc70778f8': {
      id: '5248a628c0ba0eb2edc726fbc70778f8',
      sortOrder: 10,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/all/MiniCart.jsx')
    },
    fef4b1d9ae2122930f9c33edbb982d6e: {
      id: 'fef4b1d9ae2122930f9c33edbb982d6e',
      sortOrder: 30,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/customer/pages/frontStore/all/UserIcon.jsx')
    },
    '41c9e8bbe2927dedd156f41d101760fa': {
      id: '41c9e8bbe2927dedd156f41d101760fa',
      sortOrder: 50,
      component: require('/Users/nioulboy/Downloads/afg-app/themes/eve/pages/all/MobileMenu.jsx')
    }
  },
  content: {
    '5ba3e029464f1554021cfa21f7ec8624': {
      id: '5ba3e029464f1554021cfa21f7ec8624',
      sortOrder: 10,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkoutSuccess/CheckoutSuccess.jsx')
    },
    '45515ab09f9ce8f561fc40ca4ffb7b2f': {
      id: '45515ab09f9ce8f561fc40ca4ffb7b2f',
      sortOrder: 0,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Breadcrumb.jsx')
    },
    '6160cc850ef2f0df017da76fbb69ad99': {
      id: '6160cc850ef2f0df017da76fbb69ad99',
      sortOrder: 50,
      component: require('/Users/nioulboy/Downloads/afg-app/themes/eve/pages/all/Newsletter.jsx')
    }
  },
  checkoutSuccessPageLeft: {
    aca9f1d4664e70b32f75cc691bb8fb0f: {
      id: 'aca9f1d4664e70b32f75cc691bb8fb0f',
      sortOrder: 10,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkoutSuccess/CustomerInfo.jsx')
    }
  },
  checkoutSuccessSummary: {
    '08d5e6a074c58118c64a51e6807b0700': {
      id: '08d5e6a074c58118c64a51e6807b0700',
      sortOrder: 50,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkoutSuccess/ShippingNote.jsx')
    }
  },
  checkoutSuccessPageRight: {
    df4239216b018e55564e54148febf21c: {
      id: 'df4239216b018e55564e54148febf21c',
      sortOrder: 10,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/checkoutSuccess/Summary.jsx')
    }
  },
  footer: {
    '03ce62a99b643c53cea33f6fc2c573f5': {
      id: '03ce62a99b643c53cea33f6fc2c573f5',
      sortOrder: 10,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Footer.jsx')
    }
  },
  head: {
    '170528765f0295e4db900fd92ea387bc': {
      id: '170528765f0295e4db900fd92ea387bc',
      sortOrder: 5,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/HeadTags.jsx')
    }
  },
  body: {
    '4059cdefcdbedb109312b2dc58773353': {
      id: '4059cdefcdbedb109312b2dc58773353',
      sortOrder: 1,
      component: require('/Users/nioulboy/Downloads/afg-app/themes/eve/pages/all/Layout.jsx')
    },
    '18bf66723f1e3394e1ebb5dce01e8097': {
      id: '18bf66723f1e3394e1ebb5dce01e8097',
      sortOrder: 10,
      component: require('/Users/nioulboy/Downloads/afg-app/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Notification.jsx')
    }
  },
  header: {
    cf083a89bbc361dbc3bb390f0244433b: {
      id: 'cf083a89bbc361dbc3bb390f0244433b',
      sortOrder: 5,
      component: require('/Users/nioulboy/Downloads/afg-app/themes/eve/pages/all/Logo.jsx')
    },
    fd37b207dc3a5ac28eabdd0f531577ca: {
      id: 'fd37b207dc3a5ac28eabdd0f531577ca',
      sortOrder: 1,
      component: require('/Users/nioulboy/Downloads/afg-app/themes/eve/pages/all/Menu.jsx')
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/CollectionProducts.jsx')
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/TextBlock.jsx')
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/BasicMenu.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );