// @ts-check
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapidePlugin from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Barta',
			description: 'Unified Bangladeshi SMS Gateway for Laravel',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/iRaziul/barta' },
			],
			plugins: [starlightThemeRapidePlugin()],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Configuration', slug: 'getting-started/configuration' },
					],
				},
				{
					label: 'Usage',
					items: [
						{ label: 'Basic Usage', slug: 'usage/basic-usage' },
						{ label: 'Bulk SMS', slug: 'usage/bulk-sms' },
						{ label: 'Response Handling', slug: 'usage/response-handling' },
						{ label: 'Phone Formatting', slug: 'usage/phone-formatting' },
					],
				},
				{
					label: 'Advanced',
					items: [
						{ label: 'Queue Support', slug: 'advanced/queue-support' },
						{ label: 'Laravel Notifications', slug: 'advanced/notifications' },
						{ label: 'Switching Drivers', slug: 'advanced/switching-drivers' },
						{ label: 'Custom Drivers', slug: 'advanced/custom-drivers' },
					],
				},
				{
					label: 'Gateways',
					items: [
						{ label: 'Overview', slug: 'gateways' },
						{ label: 'Log Driver', slug: 'gateways/log' },
						{ label: 'SSL Wireless', slug: 'gateways/ssl' },
						{ label: 'eSMS', slug: 'gateways/esms' },
						{ label: 'MimSMS', slug: 'gateways/mimsms' },
						{ label: 'Infobip', slug: 'gateways/infobip' },
						{ label: 'Carrier Direct', slug: 'gateways/carriers' },
						{ label: 'Other Gateways', slug: 'gateways/others' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Error Handling', slug: 'guides/error-handling' },
						{ label: 'Testing', slug: 'guides/testing' },
						{ label: 'Troubleshooting', slug: 'guides/troubleshooting' },
					],
				},
				{
					label: 'API Reference',
					slug: 'api-reference',
				},
			],
		}),
	],
})
