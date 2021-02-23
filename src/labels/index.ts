import { Webhooks } from '@octokit/webhooks';
import { labelWebhookHandler } from './labelWebhookHandler';
import { initLabelsInNewRepoHandler } from './initLabelsInNewRepo';
import dotenv from 'dotenv';
dotenv.config();

export const labelsWebhook = new Webhooks({
  secret: process.env.LABEL_HOOK_SECRET,
  path: '/labels',
});
labelsWebhook.on('label', labelWebhookHandler);

export const repoCreatedWebhook = new Webhooks({
  secret: process.env.REPO_INIT_HOOK_SECRET,
  path: '/repo-created-labels',
});

repoCreatedWebhook.on('repository.created', initLabelsInNewRepoHandler);
