/**
 * View Transitions API type declarations
 * https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
 */

interface Document {
    startViewTransition?: (callback: () => void | Promise<void>) => ViewTransition;
  }
  
  interface ViewTransition {
    finished: Promise<void>;
    ready: Promise<void>;
    updateCallbackDone: Promise<void>;
    skipTransition(): void;
  }
  
  interface CSSStyleDeclaration {
    viewTransitionName?: string;
  }