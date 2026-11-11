import { createAction } from '@ngrx/store';
import { GlobalConfigSectionUpdate } from '../global-config.model';
import { PersistentActionMeta } from '../../../op-log/core/persistent-action.interface';
import { OpType } from '../../../op-log/core/operation.types';

export const updateGlobalConfigSection = createAction(
  '[Global Config] Update Global Config Section',
  (configProps: GlobalConfigSectionUpdate) => ({
    ...configProps,
    meta: {
      isPersistent: true,
      entityType: 'GLOBAL_CONFIG',
      entityId: configProps.sectionKey, // Use section key as entity ID
      opType: OpType.Update,
    } satisfies PersistentActionMeta,
  }),
);
