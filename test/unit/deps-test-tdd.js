// This file was autogenerated by app/closure-library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../js/engine/core/EntityManager.js', ['Engine.EntityManager'], ['goog.array']);
goog.addDependency('../../../js/engine/core/Frame.js', ['Engine.Frame'], []);
goog.addDependency('../../../js/engine/core/FrameManager.js', ['Engine.FrameManager'], ['Engine.Frame']);
goog.addDependency('../../../js/engine/core/SystemManager.js', ['Engine.SystemManager'], ['goog.array']);
goog.addDependency('../../../js/engine/core/component.js', ['Engine.Component'], []);
goog.addDependency('../../../js/engine/core/core.js', ['Engine.Core'], ['Engine.EntityManager', 'Engine.FrameManager', 'Engine.SystemManager', 'goog.Timer', 'goog.events', 'goog.object']);
goog.addDependency('../../../js/engine/core/engine.js', ['Engine'], ['Engine.Core', 'Engine.Debug.vendor']);
goog.addDependency('../../../js/engine/core/system.js', ['Engine.System'], []);
goog.addDependency('../../../js/game/core/moba.js', ['Moba'], ['Engine']);
goog.addDependency('../../../js/libs/vendor.loader.js', ['Engine.Debug.vendor'], []);
goog.addDependency('../../../js/main.js', ['main'], ['Moba']);