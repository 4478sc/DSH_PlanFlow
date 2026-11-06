#!/bin/bash
# rpm %posttrans for the .rpm (#11136). The desktop entry's Exec points at
# /usr/bin/dsh-planflow, because xdg-open discards a handler whose Exec path
# contains a space (/opt/DSH_PlanFlow/...). On upgrade rpm runs the OLD
# package's %postun after the new %post, and electron-builder's after-remove
# script removes that link unconditionally. %posttrans runs last, so re-create
# it here, mirroring electron-builder's after-install.tpl. It does not run on
# erase, so uninstalling still removes the link.
APP_BIN='/opt/DSH_PlanFlow/dsh-planflow'

if type update-alternatives >/dev/null 2>&1; then
    update-alternatives --install '/usr/bin/dsh-planflow' 'dsh-planflow' "$APP_BIN" 100 || ln -sf "$APP_BIN" '/usr/bin/dsh-planflow'
else
    ln -sf "$APP_BIN" '/usr/bin/dsh-planflow'
fi
