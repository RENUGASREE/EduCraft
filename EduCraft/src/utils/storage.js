const KEYS = {
  USER: 'educraft_user',
  PROGRESS: 'educraft_progress',
  THEME: 'educraft_theme'
}

export const storage = {
  getUser: () => JSON.parse(localStorage.getItem(KEYS.USER) || 'null'),
  setUser: (user) => localStorage.setItem(KEYS.USER, JSON.stringify(user)),

  getProgress: () => JSON.parse(localStorage.getItem(KEYS.PROGRESS) || '{"completedLessons":[],"quizScores":{}}'),
  setProgress: (progress) => localStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress)),

  getTheme: () => localStorage.getItem(KEYS.THEME) || 'dark',
  setTheme: (theme) => localStorage.setItem(KEYS.THEME, theme),
}

export function completeLesson(id) {
  const p = storage.getProgress()
  if (!p.completedLessons.includes(id)) {
    p.completedLessons.push(id)
    storage.setProgress(p)
  }
}

export function saveQuizScore(quizId, score) {
  const p = storage.getProgress()
  p.quizScores[quizId] = Math.max(p.quizScores[quizId] || 0, score)
  storage.setProgress(p)
}
