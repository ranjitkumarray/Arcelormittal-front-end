export const NavItems = [
       
    {
        name: 'Management',
        url: '',
        active_img: '../../../assets/images/report 2.png',
        inactive_img: '../../../assets/images/report 2.png',
        tag: 'management',
        type: "admin",
        children: [
            {
                name: 'User',
                url: '/user/management',
                icon: 'fa fa-user',
                tag: 'management_sub_menu',


            },
            {
                name: 'User Group',
                url: '/user/group-management',
                icon: 'fa fa-users',
                tag: 'management_sub_menu',

            }
        ]

    },
    {
        name: 'Alloy & Scrap',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'alloy_scrap',
        type: "admin",
        children: [
            {
                name: 'Upload Alloy & Scrap',
                url: '/alloy-scrap/upload',
                icon: 'fa fa-file',
                tag: 'alloy_scrap_sub_menu',


            },
            {
                name: 'History',
                url: '/alloy-scrap/history',
                icon: 'fa fa-history',
                tag: 'alloy_scrap_sub_menu',

            }
        ]

    },
    {
        name: 'SMB',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'smb',
        type: 'admin',
        children: [
            {
                name: 'Base Price Addition',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Base_Price_Addition',
                children: [
                    {
                        name: 'Price Addition List',
                        url: '/smb/base-price/list',
                        icon: 'fa fa-file',
                        tag: 'alloy_scrap_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/base-price/history',
                        icon: 'fa fa-history',
                        tag: 'alloy_scrap_sub_menu',

                    }
                ]

            },
            {
                name: 'Incoterm Exceptions',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Incoterm_Exceptions',
                children: [
                    {
                        name: 'Incoterm Exceptions List',
                        url: '/smb/incoterm-exceptions/list',
                        icon: 'fa fa-file',
                        tag: 'Incoterm_Exceptions_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/incoterm-exceptions/history',
                        icon: 'fa fa-history',
                        tag: 'Incoterm_Exceptions_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Certificate',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Certificate',
                children: [
                    {
                        name: 'Certificate List',
                        url: '/smb/extra-certificate/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Certificate_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/extra-certificate/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Certificate_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Delivery Mill',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Delivery_Mill',
                children: [
                    {
                        name: 'Delivery Mill List',
                        url: '/smb/delivery-mill/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Delivery_Mill_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/delivery-mill/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Delivery_Mill_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Freight Parity',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Freight_Parity',
                children: [
                    {
                        name: 'Freight Parity List',
                        url: '/smb/freight-parity/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Freight_Parity_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/freight-parity/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Freight_Parity_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Grade',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Grade',
                children: [
                    {
                        name: 'Grade List',
                        url: '/smb/grade/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Grade_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/grade/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Grade_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Length Logistic',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Length_Logistic',
                children: [
                    {
                        name: 'Length Logistic List',
                        url: '/smb/length-logistic/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Length_Logistic_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/length-logistic/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Length_Logistic_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Length Production',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Length_Production',
                children: [
                    {
                        name: 'Length Production List',
                        url: '/smb/length-production/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Length_Production_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/length-production/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Length_Production_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Profile',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Profile',
                children: [
                    {
                        name: 'Profile List',
                        url: '/smb/profile/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Profile_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/profile/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Profile_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Profile Iberia & Italy',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Profile_Iberia_and_Italy',
                children: [
                    {
                        name: 'Profile Iberia & Italy List',
                        url: '/smb/profile-lberia-italy/list',
                        icon: 'fa fa-file',
                        tag: 'Profile_Iberia_and_Italy_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/profile-lberia-italy/history',
                        icon: 'fa fa-history',
                        tag: 'Profile_Iberia_and_Italy_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra - Transport Mode',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Transport_Mode',
                children: [
                    {
                        name: 'Transport Mode List',
                        url: '/smb/transport-mode/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Transport_Mode_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/transport-mode/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Transport_Mode_sub_menu',

                    }
                ]

            },
            //mine
            {
                name: 'Extra MinTon Leans',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'SMBExtMinTon_Leans',
                children: [
                    {
                        name: 'Extra MinTon Leans List',
                        url: '/smb/minton-leans/list',
                        icon: 'fa fa-file',
                        tag: 'SMBExtMinTon_Leans_sub_menu',
        
                    },
                    {
                        name: 'Upload History',
                        url: '/smb/minton-leans/history',
                        icon: 'fa fa-history',
                        tag: 'SMBExtMinTon_Leans_sub_menu',
        
                    }
                ]
        
            },
            {
                name: 'Extra Piece Count',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'SMBExtPieceCount',
                children: [
                    {
                        name: 'Extra Piece Count List',
                        url: '/smb/pricecount/list',
                        icon: 'fa fa-file',
                        tag: 'SMBExtPieceCount_sub_menu',
        
                    },
                    {
                        name: 'Upload History',
                        url: '/smb/pricecount/history',
                        icon: 'fa fa-history',
                        tag: 'SMBExtPieceCount_sub_menu',
        
                    }
                ]
        
            },
            {
                name: 'DisEarlyPmt',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'DisEarlyPtm',
                children: [
                    {
                        name: 'DisEarlyPmt List',
                        url: '/smb/dis-earlyptm/list',
                        icon: 'fa fa-file',
                        tag: 'ExtPieceCount_sub_menu',
        
                    },
                    {
                        name: 'Upload History',
                        url: '/smb/dis-earlyptm/history',
                        icon: 'fa fa-history',
                        tag: 'ExtPieceCount_sub_menu',
        
                    }
                ]
        
            },


        ]

    },
    {
        name: 'SMB-miniBar',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'smb_mini_bar',
        type: "admin",
        children: [
            {
                name: 'Base Price Addition',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Base_Price_Addition',
                children: [
                    {
                        name: 'Price Addition List',
                        url: '/smb/base-price/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_alloy_scrap_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/base-price/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_alloy_scrap_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Certificate',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Certificate',
                children: [
                    {
                        name: 'Certificate List',
                        url: '/smb/extra-certificate/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Certificate_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/extra-certificate/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Certificate_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Delivery Mill',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Delivery_Mill',
                children: [
                    {
                        name: 'Delivery Mill List',
                        url: '/smb/delivery-mill/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Delivery_Mill_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/delivery-mill/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Delivery_Mill_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Freight Parity',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Freight_Parity',
                children: [
                    {
                        name: 'Freight Parity List',
                        url: '/smb/freight-parity/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Freight_Parity_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/freight-parity/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Freight_Parity_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Grade',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Grade',
                children: [
                    {
                        name: 'Grade List',
                        url: '/smb/grade/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Grade_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/grade/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Grade_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Length Logistic',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Length_Logistic',
                children: [
                    {
                        name: 'Length Logistic List',
                        url: '/smb/length-logistic/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Length_Logistic_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/length-logistic/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Length_Logistic_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Length Production',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Length_Production',
                children: [
                    {
                        name: 'Length Production List',
                        url: '/smb/length-production/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Length_Production_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/length-production/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Length_Production_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Profile',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Profile',
                children: [
                    {
                        name: 'Profile List',
                        url: '/smb/profile/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Profile_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/profile/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Profile_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra Profile Iberia & Italy',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Profile_Iberia_and_Italy',
                children: [
                    {
                        name: 'Profile Iberia & Italy List',
                        url: '/smb/profile-lberia-italy/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Profile_Iberia_and_Italy_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/profile-lberia-italy/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Profile_Iberia_and_Italy_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra - Transport Mode',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Transport_Mode',
                children: [
                    {
                        name: 'Transport Mode List',
                        url: '/smb/transport-mode/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Transport_Mode_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/transport-mode/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Transport_Mode_sub_menu',

                    }
                ]

            },
            //mine
            {
                name: 'Extra MinTon Leans',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_SMBExtMinTon_Leans',
                children: [
                    {
                        name: 'Extra MinTon Leans List',
                        url: '/smb/minton-leans/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_SMBExtMinTon_Leans_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/minton-leans/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_SMBExtMinTon_Leans_sub_menu',

                    }
                ]

            },
            {
                name: 'Extra PieceCount',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_ExtPieceCount',
                children: [
                    {
                        name: 'Extra PieceCount List',
                        url: '/smb/pricecount/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_ExtPieceCount_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/pricecount/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_ExtPieceCount_sub_menu',

                    }
                ]

            },
            {
                name: 'DisEarly Pmt',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_DisEarlyPmt',
                children: [
                    {
                        name: 'DisEarly Pmt List',
                        url: '/smb/dis-earlyptm/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_DisEarlyPtm_sub_menu',

                    },
                    {
                        name: 'Upload History',
                        url: '/smb/dis-earlyptm/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_DisEarlyPtm_sub_menu',

                    }
                ]

            }

        ]

    },
    
    {
        name: 'My Tasks',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'My_Tasks',
        type: "user",
        children: [
            {
                name: 'Offer status / Pending Approval',
                url: '/management/offer-status',
                icon: '',
                tag: 'offer_status_sub_menu',
            },
            {
                name: 'Order Status & Delay',
                url: '/management/order-status',
                icon: '',
                tag: 'order_status_sub_menu',
            },
            {
                name: 'Customer Volume & Over Booking',
                url: '/management/customer-volume',
                icon: '',
                tag: 'customer_volume_sub_menu',
            },
            {
                name: 'Missing Invoice Payments',
                url: '/management/missing-invoice-payment',
                icon: '',
                tag: 'missing_invoice_payment_sub_menu',
            },
        ]

    },
]