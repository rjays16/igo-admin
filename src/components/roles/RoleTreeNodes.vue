<template>
  <a-directory-tree
    v-model:expandedKeys="expandedKeys"
    v-model:checkedKeys="checkedKeys"
    multiple
    checkable
    :selectable="false"
    :tree-data="treeData">
  </a-directory-tree>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {    
    const treeData = [{
      title: 'iGo Group',
      key: '0',
      children: [{
        title: 'Dashboard',
        key: '0-1',
        children: [{
          title: 'View Deposit Stats',
          key: '0-1-1',
        }, {
          title: 'View Credit Stats',
          key: '0-1-2',
        }, {
          title: 'View Withdrawal Stats',
          key: '0-1-3',
        }, {
          title: 'View Interest Earned Periodic Stats',
          key: '0-1-4',
        }, {
          title: 'View Interest Adjustment Stats',
          key: '0-1-5',
        }],
      }, {
        title: 'Clients',
        key: '0-2',
        children: [{
          title: 'Add Client Button',
          key: '0-2-1',
        }, {
          title: 'Export To Button',
          key: '0-2-2',
          children: [{
            title: 'Excel Format',
            key: '0-2-2-1'
          }, {
            title: 'CSV Format',
            key: '0-2-2-2'
          }, {
            title: 'PDF Format',
            key: '0-2-2-3'
          }],
        }, {
          title: 'Filter Box',
          key: '0-2-3',
        }, {
          title: 'Client Table',
          key: '0-2-4',
          children: [{
            title: 'Client ID',
            key: '0-2-4-1'
          }, {
            title: 'First Name',
            key: '0-2-4-2',
            children: [{
              title: 'Show This Field',
              key: '0-2-4-2-1'
            }, {
              title: 'Allow Update On This Field',
              key: '0-2-4-2-2'
            }],
          }, {
            title: 'Last Name',
            key: '0-2-4-3',
            children: [{
              title: 'Show This Field',
              key: '0-2-4-3-1'
            }, {
              title: 'Allow Update On This Field',
              key: '0-2-4-3-2'
            }],
          }, {
            title: 'Email Address',
            key: '0-2-4-4'
          }, {
            title: 'Organization',
            key: '0-2-4-5'
          }, {
            title: 'Address1',
            key: '0-2-4-6'
          }, {
            title: 'Address2',
            key: '0-2-4-7'
          }, {
            title: 'City',
            key: '0-2-4-8'
          }, {
            title: 'State',
            key: '0-2-4-9'
          }, {
            title: 'Zip',
            key: '0-2-4-10'
          }, {
            title: 'Phone',
            key: '0-2-4-11',
            children: [{
              title: 'Show This Field',
              key: '0-2-4-11-1'
            }, {
              title: 'Allow Update On This Field',
              key: '0-2-4-11-2'
            }],
          }, {
            title: 'Type',
            key: '0-2-4-12'
          }, {
            title: 'CADate',
            key: '0-2-4-13'
          }, {
            title: 'Actions',
            key: '0-2-4-14',
            children: [{
              title: 'Edit Button',
              key: '0-2-4-14-1',
              children: [{
                title: 'Show This Button',
                key: '0-2-4-14-1-1'
              }, {
                title: 'Disable This Button',
                key: '0-2-4-14-1-2'
              }],
            }, {
              title: 'Delete Button',
              key: '0-2-4-14-2',
              children: [{
                title: 'Show This Button',
                key: '0-2-4-14-2-1'
              }, {
                title: 'Disable This Button',
                key: '0-2-4-14-2-2'
              }],
            }],
          }],
        }],
      }, {
        title: 'Accounts',
        key: '0-3',
      }, {
        title: 'Terms',
        key: '0-4',
      }, {
        title: 'Transactions',
        key: '0-5',
      }, {
        title: 'Summary',
        key: '0-6',
        children: [{
          title: 'Generate Button',
          key: '0-6-1',
          children: [{
            title: 'Show This Button',
            key: '0-6-1-1'
          }, {
            title: 'Disable This Button',
            key: '0-6-1-2'
          }],
        }, {
          title: 'Export To Button',
          key: '0-6-2',
          children: [{
            title: 'Excel File Format',
            key: '0-6-2-1'
          }, {
            title: 'CSV File Format',
            key: '0-6-2-2'
          }, {
            title: 'PDF File Format',
            key: '0-6-2-3'
          }],
        }, {
          title: 'Balance Summary By Type',
          key: '0-6-3'
        }, {
          title: 'Interest Last Year And Current Balance Table',
          key: '0-6-4'
        }, {
          title: 'Summary Table',
          key: '0-6-5',
          children: [{
            title: 'ID',
            key: '0-6-5-1'
          }, {
            title: 'Account Description',
            key: '0-6-5-2'
          }, {
            title: 'Status',
            key: '0-6-5-3'
          }, {
            title: 'Client ID',
            key: '0-6-5-4'
          }],
        }],
      }, {
        title: 'IA Dashboard',
        key: '0-7',
      }, {
        title: 'Statements', 
        key: '0-8',
      }, {
        title: 'Interest Report',
        key: '0-9',
      }, {
        title: 'Audit Trail',
        key: '0-10',
      }, {
        title: 'Settings',
        key: '0-11',
        children: [{
          title: 'Transaction Type',
          key: '0-11-1',
          children: [{
            title: 'Add Transaction Type Button',
            key: '0-11-1-1'
          }, {
            title: 'Export To',
            key: '0-11-1-2'
          }, {
            title: 'Filter Box',
            key: '0-11-1-3'
          }, {
            title: 'Transaction Type Table',
            key: '0-11-1-4',
            children: [{
              title: 'ID',
              key: '0-11-1-4-1'
            }, {
              title: 'Trans Type',
              key: '0-11-1-4-2',
              children: [{
                title: 'Show This Field',
                key: '0-11-1-4-2-1'
              }, {
                title: 'Allow Update To This Field',
                key: '0-11-1-4-2-2'
              }],
            }, {
              title: 'Description',
              key: '0-11-1-4-3'
            }, {
              title: 'Created At',
              key: '0-11-1-4-4'
            }, {
              title: 'Actions',
              key: '0-11-1-4-5',
              children: [{
                title: 'Edit Button',
                key: '0-11-1-4-5-1',
                children: [{
                  title: 'Show This Button',
                  key: '0-11-1-4-5-1-1'
                }, {
                  title: 'Disable This Button',
                  key: '0-11-1-4-5-1-2'
                }],
              }, {
                title: 'Delete Button',
                key: '0-11-1-4-5-2',
                children: [{
                  title: 'Show This Button',
                  key: '0-11-1-4-5-2-1'
                }, {
                  title: 'Disable This Button',
                  key: '0-11-1-4-5-2-2'
                }],
              }],
            }],
          }],
        }, {
          title: 'Client Type',
          key: '0-11-2'
        }, {
          title: 'Organization',
          key: '0-11-3'
        }, {
          title: 'States',
          key: '0-11-4'
        }, {
          title: 'Cities',
          key: '0-11-5'
        }, {
          title: 'Users',
          key: '0-11-6'
        }, {
          title: 'Roles',
          key: '0-11-7'
        }],
      }],
    }];
    return {
      treeData,
    };
  },
  data() {
    return {
      expandedKeys: [],
      checkedKeys: []
    }
  },
  // methods: {
  //   handleSelect() {
  //     console.log('handleSelect', this.checkedKeys)
  //   }
  // }
});
</script>