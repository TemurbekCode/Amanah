import { useCallback, useState } from 'react';

/** Shows a field's error after it was left once, or after the form was submitted. */
export function useTouched<K extends string>() {
  const [touched, setTouched] = useState<Partial<Record<K, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const touch = useCallback((key: K) => setTouched((prev) => ({ ...prev, [key]: true })), []);
  const show = useCallback((key: K) => submitted || touched[key] === true, [submitted, touched]);
  const submit = useCallback(() => setSubmitted(true), []);

  return { touch, show, submit };
}
