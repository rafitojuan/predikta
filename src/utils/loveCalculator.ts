import { LoveMeterInput, LoveMeterResult } from '../types';

export function calculateLoveCompatibility(data: LoveMeterInput): number {
  const { partner1, partner2 } = data;
  
  const name1Score = calculateNameScore(partner1.name);
  const name2Score = calculateNameScore(partner2.name);
  
  const nameCompatibility = Math.abs(name1Score - name2Score);
  
  const baseScore = 100 - nameCompatibility * 2;
  
  const consistentRandom = getConsistentRandom(partner1.name + partner2.name);
  const finalScore = Math.max(0, Math.min(100, baseScore + (consistentRandom - 0.5) * 20));
  
  return Math.round(finalScore);
}

function calculateNameScore(name: string): number {
  const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
  let score = 0;
  
  for (let i = 0; i < cleanName.length; i++) {
    score += cleanName.charCodeAt(i) - 96;
  }
  
  return score % 50;
}

function getConsistentRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash) / 2147483647;
}

export function getCompatibilityCategory(score: number): { category: string; description: string; emoji: string } {
  if (score >= 90) return { category: "Perfect Match!", description: "You two are absolutely meant for each other! The stars have aligned perfectly.", emoji: "💕" };
  if (score >= 75) return { category: "Great Compatibility!", description: "Amazing connection! You complement each other beautifully.", emoji: "💖" };
  if (score >= 60) return { category: "Good Potential!", description: "Strong foundation for a wonderful relationship!", emoji: "💗" };
  if (score >= 45) return { category: "Worth Exploring!", description: "There's definitely something special here worth discovering.", emoji: "💓" };
  if (score >= 30) return { category: "Challenging but Possible!", description: "With effort and understanding, love can bloom.", emoji: "💔" };
  return { category: "Better as Friends!", description: "Sometimes the best relationships start as friendships.", emoji: "💙" };
}

export function generateLoveMeterResult(input: LoveMeterInput): LoveMeterResult {
  const compatibility = calculateLoveCompatibility(input);
  const { category, description } = getCompatibilityCategory(compatibility);
  
  return {
    id: Date.now().toString(),
    input,
    compatibility,
    category,
    description,
    createdAt: new Date()
  };
}