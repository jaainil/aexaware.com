import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronRight, ChevronLeft, Smartphone, Globe, Bot, Code, DollarSign, Calendar, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 'type' | 'budget' | 'timeline' | 'details' | 'success';

interface ProjectData {
    type: string;
    budget: string;
    timeline: string;
    name: string;
    email: string;
    company: string;
    description: string;
}

export default function ProjectCalculator() {
    const [step, setStep] = useState<Step>('type');
    const [data, setData] = useState<ProjectData>({
        type: '',
        budget: '',
        timeline: '',
        name: '',
        email: '',
        company: '',
        description: ''
    });

    const handleSelect = (key: keyof ProjectData, value: string) => {
        setData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => {
        if (step === 'type') setStep('budget');
        else if (step === 'budget') setStep('timeline');
        else if (step === 'timeline') setStep('details');
    };

    const prevStep = () => {
        if (step === 'budget') setStep('type');
        else if (step === 'timeline') setStep('budget');
        else if (step === 'details') setStep('timeline');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend or email service
        console.log('Form submitted:', data);
        setStep('success');
    };

    const projectTypes = [
        { id: 'mobile', label: 'Mobile App', icon: Smartphone, desc: 'iOS & Android solutions' },
        { id: 'web', label: 'Website / Web App', icon: Globe, desc: 'Responsive & modern web' },
        { id: 'ai', label: 'AI & ML Solution', icon: Bot, desc: 'Intelligent automation' },
        { id: 'custom', label: 'Custom Software', icon: Code, desc: 'Tailored enterprise software' },
    ];

    const budgetRanges = [
        { id: 'lt5k', label: '< $5k', desc: 'MVP or small project' },
        { id: '5k-10k', label: '$5k - $10k', desc: 'Standard business solution' },
        { id: '10k-25k', label: '$10k - $25k', desc: 'Complex application' },
        { id: '25k+', label: '$25k+', desc: 'Enterprise grade platform' },
    ];

    const timelines = [
        { id: 'asap', label: 'ASAP', desc: 'Urgent priority' },
        { id: '1-3m', label: '1 - 3 Months', desc: 'Standard timeline' },
        { id: '3-6m', label: '3 - 6 Months', desc: 'Large scale project' },
        { id: 'flexible', label: 'Flexible', desc: 'Quality first' },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className="mb-8">
                <div className="flex justify-between items-center relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-secondary -z-10 rounded-full"></div>
                    <div className={cn("absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary transition-all duration-500 rounded-full",
                        step === 'type' ? 'w-[0%]' :
                            step === 'budget' ? 'w-[33%]' :
                                step === 'timeline' ? 'w-[66%]' :
                                    'w-[100%]'
                    )}></div>

                    {['type', 'budget', 'timeline', 'details'].map((s, i) => (
                        <div key={s} className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center border-4 transition-colors duration-300 bg-background",
                            ['type', 'budget', 'timeline', 'details', 'success'].indexOf(step) >= i
                                ? "border-primary text-primary font-bold"
                                : "border-secondary text-muted-foreground"
                        )}>
                            {i + 1}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-2 text-xs font-medium text-muted-foreground px-1">
                    <span>Type</span>
                    <span>Budget</span>
                    <span>Timeline</span>
                    <span>Details</span>
                </div>
            </div>

            <Card className="border-border/50 shadow-xl backdrop-blur-sm bg-card/95">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl md:text-3xl font-serif">
                        {step === 'type' && "What are you building?"}
                        {step === 'budget' && "What's your estimated budget?"}
                        {step === 'timeline' && "When do you need this?"}
                        {step === 'details' && "Where should we send the estimate?"}
                        {step === 'success' && "Message Received!"}
                    </CardTitle>
                    <CardDescription className="text-lg">
                        {step === 'type' && "Select the category that best fits your project."}
                        {step === 'budget' && "This helps us recommend the right tech stack."}
                        {step === 'timeline' && "We'll allocate resources accordingly."}
                        {step === 'details' && "We'll get back to you within 24 hours."}
                        {step === 'success' && "Our team will review your requirements and contact you shortly."}
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-6 md:p-8">
                    {step === 'type' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projectTypes.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => { handleSelect('type', item.label); nextStep(); }}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all duration-200 hover:border-primary/50 hover:bg-accent/50 text-center gap-4 group",
                                        data.type === item.label ? "border-primary bg-accent/50" : "border-border"
                                    )}
                                >
                                    <div className={cn("p-4 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors", data.type === item.label && "bg-primary/10")}>
                                        <item.icon className={cn("w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors", data.type === item.label && "text-primary")} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.label}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 'budget' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {budgetRanges.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => { handleSelect('budget', item.label); nextStep(); }}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all duration-200 hover:border-primary/50 hover:bg-accent/50 text-center gap-2 group",
                                        data.budget === item.label ? "border-primary bg-accent/50" : "border-border"
                                    )}
                                >
                                    <div className={cn("p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors", data.budget === item.label && "bg-primary/10")}>
                                        <DollarSign className={cn("w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors", data.budget === item.label && "text-primary")} />
                                    </div>
                                    <h3 className="font-semibold text-lg">{item.label}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 'timeline' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {timelines.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => { handleSelect('timeline', item.label); nextStep(); }}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all duration-200 hover:border-primary/50 hover:bg-accent/50 text-center gap-2 group",
                                        data.timeline === item.label ? "border-primary bg-accent/50" : "border-border"
                                    )}
                                >
                                    <div className={cn("p-3 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors", data.timeline === item.label && "bg-primary/10")}>
                                        <Calendar className={cn("w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors", data.timeline === item.label && "text-primary")} />
                                    </div>
                                    <h3 className="font-semibold text-lg">{item.label}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </button>
                            ))}
                        </div>
                    )}

                    {step === 'details' && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        required
                                        value={data.name}
                                        onChange={(e) => handleSelect('name', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        value={data.email}
                                        onChange={(e) => handleSelect('email', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="company">Company Name (Optional)</Label>
                                    <Input
                                        id="company"
                                        placeholder="Your Company Ltd."
                                        value={data.company}
                                        onChange={(e) => handleSelect('company', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="description">Project Details</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Tell us a bit more about your vision..."
                                        className="min-h-[100px]"
                                        value={data.description}
                                        onChange={(e) => handleSelect('description', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="rounded-lg bg-secondary/50 p-4 text-sm text-muted-foreground">
                                <p className="font-semibold text-foreground mb-1">Summary:</p>
                                <p>Looking for a <span className="text-primary">{data.type}</span> with a budget of <span className="text-primary">{data.budget}</span>, needed <span className="text-primary">{data.timeline}</span>.</p>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" size="lg" className="w-full md:w-auto rounded-full">
                                    Get My Estimate
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    )}

                    {step === 'success' && (
                        <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                <Sparkles className="w-10 h-10 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Thank You!</h3>
                                <p className="text-muted-foreground max-w-md mx-auto">
                                    We've received your project details. One of our tech experts will analyze your requirements and send you a preliminary estimate within 24 hours.
                                </p>
                            </div>
                            <Button onClick={() => window.location.href = '/'} variant="outline" className="rounded-full">
                                Return to Home
                            </Button>
                        </div>
                    )}
                </CardContent>

                {step !== 'success' && step !== 'type' && (
                    <CardFooter className="flex justify-between border-t border-border/50 p-6">
                        <Button variant="ghost" onClick={prevStep} disabled={step === 'type'} className="rounded-full">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                        {step !== 'details' && (
                            <div className="text-sm text-muted-foreground">
                                Step {['type', 'budget', 'timeline', 'details'].indexOf(step) + 1} of 4
                            </div>
                        )}
                    </CardFooter>
                )}
            </Card>
        </div>
    );
}
