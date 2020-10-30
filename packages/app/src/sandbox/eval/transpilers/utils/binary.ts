import { Module } from 'sandpack-core/lib/types/module';

export function getModuleHTTPPath(module: Module, sandboxId: string | null) {
  if (!sandboxId) {
    return module.path;
  }

  return `https://csb-bogdan.dev/api/v1/sandboxes/${sandboxId}/fs${module.path}`;
}
